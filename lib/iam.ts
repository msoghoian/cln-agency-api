import { Stack } from 'aws-cdk-lib';
import { ManagedPolicy, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { IamResources } from '@lib/types';

const useIam = (context: Stack): IamResources => {
  /* This role allows API Gateway to push logs to CloudWatch */
  const apiGatewayCloudWatchRole: Role = new Role(
    context,
    'apiGatewayCloudWatchRole',
    {
      assumedBy: new ServicePrincipal('apigateway.amazonaws.com'),
      description: 'Role for API Gateway to push logs to CloudWatch',
      managedPolicies: [
        ManagedPolicy.fromAwsManagedPolicyName(
          'service-role/AmazonAPIGatewayPushToCloudWatchLogs',
        ),
      ],
    },
  );

  return {
    apiGatewayCloudWatchRole,
  };
};

export { useIam };
