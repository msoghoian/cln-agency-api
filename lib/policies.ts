import { Stack } from 'aws-cdk-lib';
import { Policy } from 'aws-cdk-lib/aws-iam';
import { PolicyResources, PolicyStatements } from '@lib/types';

const usePolicies = (
  context: Stack,
  policyStatements: PolicyStatements,
): PolicyResources => {
  const generatePresignedUrlLambdaPolicy: Policy = new Policy(
    context,
    'generatePresignedUrlLambdaPolicy',
    {
      statements: [policyStatements.agencyUploadBucketPut],
    },
  );

  return {
    generatePresignedUrlLambdaPolicy,
  };
};

export { usePolicies };
