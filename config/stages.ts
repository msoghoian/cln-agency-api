type StageName = 'dev'; // | "test" | "prod";

interface StageConfig {
  account: string;
  region: string;
  tags?: Record<string, string>;
}

const STAGES: Record<StageName, StageConfig> = {
  dev: { account: '551247846760', region: 'us-west-2' },
  // test: { account: "222222222222", region: "us-west-2", domain: "test.cln.example",
  //   tags: { Stage: "test", App: "cln-agency" } },
  // prod: { account: "333333333333", region: "us-west-2", domain: "cln.example",
  //   tags: { Stage: "prod", App: "cln-agency" } },
};

export { StageName, StageConfig, STAGES };
