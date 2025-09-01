import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { StackProps } from 'aws-cdk-lib';
import { StageName } from '@config/stages';

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

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'ClnAgencyApiQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
