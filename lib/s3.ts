import { RemovalPolicy, Stack } from 'aws-cdk-lib';
import { Bucket, HttpMethods } from 'aws-cdk-lib/aws-s3';
import { StageName } from '@config/stages';
import { S3Resources } from '@lib/types';

const useS3 = (context: Stack & { stageName: StageName }): S3Resources => {
  const removalPolicy: RemovalPolicy =
    context.stageName === 'prod' ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY;

  const agencyUploadBucket: Bucket = new Bucket(context, 'agencyUploadBucket', {
    bucketName: `agency-upload-${context.stageName}`,
    autoDeleteObjects: true,
    removalPolicy,
    cors: [
      {
        allowedHeaders: ['*'],
        allowedMethods: [HttpMethods.PUT],
        allowedOrigins: ['*'],
        maxAge: 3000,
      },
    ],
  });

  return {
    agencyUploadBucket,
  };
};

export { useS3 };
