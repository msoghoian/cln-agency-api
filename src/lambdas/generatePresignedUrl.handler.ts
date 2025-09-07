import {
  PutObjectCommand,
  PutObjectCommandInput,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { LambdaEnvVars } from '../types';

const generatePresignedUrlHandler = async (event: any) => {
  console.log(event);

  const region: string | undefined = process.env.AWS_REGION;
  const agencyUploadBucket: string | undefined =
    process.env[LambdaEnvVars.AGENCY_UPLOAD_BUCKET];

  if (!region || !agencyUploadBucket) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: 'Missing required environment variables',
      }),
    };
  }

  const fileName = event.pathParameters?.fileName;
  if (!fileName) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'fileName parameter is required' }),
    };
  }

  const s3Client: S3Client = new S3Client({ region });
  const putObjectCommandInput: PutObjectCommandInput = {
    Bucket: agencyUploadBucket,
    Key: fileName,
  };
  const pubObjectCommand = new PutObjectCommand(putObjectCommandInput);

  const signedUrl: string = await getSignedUrl(s3Client, pubObjectCommand, {
    expiresIn: 3600,
  });

  console.log('signedUrl: ', signedUrl);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ signedUrl }),
  };
};

export { generatePresignedUrlHandler };
