import * as cdk from 'aws-cdk-lib';
import { StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { StageName } from '@config/stages';
import { useApiGateway } from '@lib/apiGateway';
import { useIam } from '@lib/iam';
import { useLambdas } from '@lib/lambdas';
import { useLogs } from '@lib/logs';
import { usePolicies } from '@lib/policies';
import { usePolicyStatements } from '@lib/policyStatements';
import { useS3 } from '@lib/s3';
import {
  ApiGatewayResources,
  IamResources,
  LambdaResources,
  LogResources,
  PolicyResources,
  PolicyStatements,
  S3Resources,
} from '@lib/types';

export class ClnAgencyApiStack extends cdk.Stack {
  public readonly stageName: StageName;

  constructor(
    scope: Construct,
    id: string,
    props?: StackProps & { stageName: StageName },
  ) {
    super(scope, id, props);

    if (!props?.stageName) {
      throw new Error('stageName is required');
    }
    this.stageName = props.stageName;

    const iamResources: IamResources = useIam(this);
    const s3Resources: S3Resources = useS3(this);
    const logResources: LogResources = useLogs(this);
    const lambdaResources: LambdaResources = useLambdas(
      this,
      logResources,
      s3Resources,
    );
    const apiGatewayResources: ApiGatewayResources = useApiGateway(
      this,
      logResources,
      iamResources,
      lambdaResources,
    );

    const policyStatements: PolicyStatements = usePolicyStatements(
      this,
      s3Resources,
    );
    const policyResources: PolicyResources = usePolicies(
      this,
      policyStatements,
    );

    lambdaResources.generatePresignedUrlLambda.role?.attachInlinePolicy(
      policyResources.generatePresignedUrlLambdaPolicy,
    );
  }
}
