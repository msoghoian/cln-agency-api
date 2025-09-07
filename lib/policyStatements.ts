import { Stack } from 'aws-cdk-lib';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { PolicyStatements, S3Resources } from '@lib/types';

const usePolicyStatements = (
  context: Stack,
  s3Resources: S3Resources,
): PolicyStatements => {
  const agencyUploadBucketPut: PolicyStatement = new PolicyStatement({
    actions: ['s3:PutObject'],
    effect: Effect.ALLOW,
    resources: [s3Resources.agencyUploadBucket.arnForObjects('*')],
  });

  return {
    agencyUploadBucketPut,
  };
};

export { usePolicyStatements };
