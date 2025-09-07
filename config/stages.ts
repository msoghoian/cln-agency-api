type StageName = 'dev' | 'test' | 'prod';

interface StageConfig {
  account: string;
  region: string;
  tags?: Record<string, string>;
}

const STAGES: Record<StageName, StageConfig> = {
  dev: { account: '246766637628', region: 'us-west-2' },
  test: { account: '167517641606', region: 'us-west-2' },
  prod: { account: '437073839480', region: 'us-west-2' },
};

export { StageName, StageConfig, STAGES };
