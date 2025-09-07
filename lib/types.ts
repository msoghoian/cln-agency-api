import { RestApi, Stage } from 'aws-cdk-lib/aws-apigateway';
import { Policy, PolicyStatement, Role } from 'aws-cdk-lib/aws-iam';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { Bucket } from 'aws-cdk-lib/aws-s3';

export interface ApiGatewayResources {
  api: RestApi;
  stage: Stage;
}

export interface CognitoResources {}

export interface DynamoDbResources {}

export interface IamResources {
  apiGatewayCloudWatchRole: Role;
}

export interface LambdaResources {
  generatePresignedUrlLambda: NodejsFunction;
}

export interface LogResources {
  apiGatewayLogGroup: LogGroup;
  generatePresignedUrlLogGroup: LogGroup;
}

export interface PolicyResources {
  generatePresignedUrlLambdaPolicy: Policy;
}

export interface PolicyStatements {
  agencyUploadBucketPut: PolicyStatement;
}

export interface S3Resources {
  agencyUploadBucket: Bucket;
}

export interface StepFunctionResources {}
