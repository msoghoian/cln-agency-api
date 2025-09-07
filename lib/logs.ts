import { RemovalPolicy, Stack } from 'aws-cdk-lib';
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs';
import { StageName } from '@config/stages';
import { LogResources } from '@lib/types';

const useLogs = (context: Stack & { stageName: StageName }): LogResources => {
  const retention: RetentionDays =
    context.stageName === 'prod'
      ? RetentionDays.FIVE_YEARS
      : RetentionDays.ONE_MONTH;

  const removalPolicy: RemovalPolicy =
    context.stageName === 'prod' ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY;

  const apiGatewayLogGroup: LogGroup = new LogGroup(
    context,
    'apiGatewayLogGroup',
    {
      logGroupName: '/aws/apigateway/agency-api',
      retention,
      removalPolicy,
    },
  );

  const generatePresignedUrlLogGroup: LogGroup = new LogGroup(
    context,
    'generatePresignedUrlLogGroup',
    {
      logGroupName: '/aws/lambda/generatePresignedUrl',
      retention,
      removalPolicy,
    },
  );

  return {
    apiGatewayLogGroup,
    generatePresignedUrlLogGroup,
  };
};

export { useLogs };
