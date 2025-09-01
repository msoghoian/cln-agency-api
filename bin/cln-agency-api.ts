// bin/app.ts
import { App, StackProps, Tags } from 'aws-cdk-lib';
import { StageConfig, StageName, STAGES } from '@config/stages';
import { ClnAgencyApiStack } from '@lib/cln-agency-api-stack';

const app = new App();

// accept: `-c stage=dev` or `-c stage=prod`
const stageName: StageName = app.node.tryGetContext('stage') ?? 'dev';
const cfg: StageConfig = STAGES[stageName];

const clnAgencyApiStack = new ClnAgencyApiStack(
  app,
  `cln-agency-api-${stageName}`,
  {
    env: { account: cfg.account, region: cfg.region },
    stackName: `cln-agency-api-${stageName}`,
    description: `California Local News Agency API (${stageName})`,
    stageName,
  } as StackProps & { stageName: StageName },
);

Tags.of(clnAgencyApiStack).add('project', 'cln-agency-api');
Tags.of(clnAgencyApiStack).add('stage', stageName);

app.synth();
