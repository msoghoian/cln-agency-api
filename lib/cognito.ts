import { Stack } from 'aws-cdk-lib';
import { AccountRecovery, UserPool } from 'aws-cdk-lib/aws-cognito';
import { CognitoResources } from '@lib/types';

const useCognito = (context: Stack): CognitoResources => {
  const agencyUserPool: UserPool = new UserPool(context, 'AgencyUserPool', {
    signInCaseSensitive: false,
    accountRecovery: AccountRecovery.PHONE_AND_EMAIL,
  });

  return {
    agencyUserPool,
  };
};

export { useCognito };
