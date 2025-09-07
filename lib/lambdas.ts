import { Stack } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import {
  BundlingOptions,
  NodejsFunction,
  OutputFormat,
} from 'aws-cdk-lib/aws-lambda-nodejs';
import { LambdaResources, LogResources, S3Resources } from '@lib/types';
import { LambdaEnvVars } from '../src/types';

const useLambdas = (
  context: Stack,
  logResources: LogResources,
  s3Resources: S3Resources,
): LambdaResources => {
  const bundling: BundlingOptions = {
    minify: true,
    sourceMap: true,
    target: 'es2022',
    format: OutputFormat.ESM,
    mainFields: ['module', 'main'],
    esbuildArgs: {
      '--tree-shaking': 'true',
      '--bundle': 'true',
      '--platform': 'node',
    },
    keepNames: true,
    tsconfig: './tsconfig.json',
  };

  const runtime: Runtime = Runtime.NODEJS_22_X;

  const generatePresignedUrlLambda: NodejsFunction = new NodejsFunction(
    context,
    'generatePresignedUrl',
    {
      bundling,
      runtime,
      functionName: 'cln-generatePresignedUrl',
      description: 'Generate a presigned URL agency data to be uploaded to S3',
      entry: './src/lambdas/generatePresignedUrl.handler.ts',
      handler: 'generatePresignedUrlHandler',
      logGroup: logResources.generatePresignedUrlLogGroup,
      environment: {
        [LambdaEnvVars.AGENCY_UPLOAD_BUCKET]:
          s3Resources.agencyUploadBucket.bucketName,
      },
    },
  );

  return {
    generatePresignedUrlLambda,
  };
};

export { useLambdas };
