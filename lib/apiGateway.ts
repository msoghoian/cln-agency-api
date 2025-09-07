import { Stack } from 'aws-cdk-lib';
import {
  AccessLogFormat,
  CfnAccount,
  Deployment,
  LambdaIntegration,
  LogGroupLogDestination,
  Resource,
  RestApi,
  Stage,
} from 'aws-cdk-lib/aws-apigateway';
import { StageName } from '@config/stages';
import {
  ApiGatewayResources,
  IamResources,
  LambdaResources,
  LogResources,
} from '@lib/types';

const useApiGateway = (
  context: Stack & { stageName: StageName },
  logResources: LogResources,
  iamResources: IamResources,
  lambdaResources: LambdaResources,
): ApiGatewayResources => {
  new CfnAccount(context, 'apiGatewayAccount', {
    cloudWatchRoleArn: iamResources.apiGatewayCloudWatchRole.roleArn,
  });

  const api: RestApi = new RestApi(context, 'agency-api', {
    restApiName: 'agency-api',
    description: 'API for agency data management',
    deploy: false,
  });

  const agencyResource: Resource = api.root.addResource('agency');

  const lambdaIntegration = new LambdaIntegration(lambdaResources.generatePresignedUrlLambda, {
    proxy: true,
    allowTestInvoke: true,
  });
  
  const presignedUrlMethod = agencyResource
    .addResource('presigned-url')
    .addResource('{fileName}')
    .addMethod('GET', lambdaIntegration);

  const deployment: Deployment = new Deployment(
    context,
    'agency-api-deployment',
    { api },
  );

  // Ensure deployment happens after all resources are created
  deployment.node.addDependency(presignedUrlMethod);
  deployment.node.addDependency(lambdaResources.generatePresignedUrlLambda);

  const stage: Stage = new Stage(context, 'agency-api-stage', {
    deployment,
    stageName: context.stageName,
    accessLogDestination: new LogGroupLogDestination(
      logResources.apiGatewayLogGroup,
    ),
    accessLogFormat: AccessLogFormat.jsonWithStandardFields({
      caller: false,
      httpMethod: true,
      ip: true,
      protocol: true,
      requestTime: true,
      resourcePath: true,
      responseLength: true,
      status: true,
      user: true,
    }),
  });

  // Add role to stage
  stage.node.addDependency(iamResources.apiGatewayCloudWatchRole);

  return {
    api,
    stage,
  };
};

export { useApiGateway };
