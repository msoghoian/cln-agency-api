# Repository Guidelines

## Project Structure & Modules
- `bin/`: CDK app entrypoint (`cln-agency-api.ts`) that selects the stage via `-c stage=dev` and synthesizes the app.
- `lib/`: CDK stacks and constructs (e.g., `cln-agency-api-stack.ts`).
- `config/`: Environment configuration (`stages.ts`) exporting `StageName` and `STAGES`.
- `test/`: Jest tests (`*.test.ts`).
- `cdk.json`: CDK execution and watch config. Generated outputs live in `cdk.out/`.
- TS path aliases (from `tsconfig.json`): `@config/*`, `@lib/*`, `@bin/*`, `@test/*`.

## Build, Test, and Development
- `npm run build`: Compile TypeScript to `dist/`.
- `npm run watch`: Recompile on file changes.
- `npm test`: Run Jest (via `ts-jest`).
- `npm run aws:sso:login`: AWS SSO login for the `arrestdata-pro-dev_sso` profile.
- `npm run cdk:synth:dev`: Synthesize the dev stack (`-c stage=dev`).
- `npm run cdk:deploy:dev`: Deploy the dev stack (requires SSO login).
- `npm run cdk:bootstrap`: Bootstrap the account/region before first deploy.

## Coding Style & Naming
- TypeScript strict mode; 2-space indent; LF; max line length 80 (see `.editorconfig`).
- Prettier: single quotes, semicolons, trailing commas (see `.prettierrc`).
- Files: kebab-case (`my-feature.ts`); Classes: PascalCase; variables/functions: camelCase.
- Prefer path aliases (`@lib/...`, `@config/...`) over deep relative imports.
- Format before committing: `npx prettier --write .`.

## Testing Guidelines
- Framework: Jest + `ts-jest`.
- Location: `test/`; Naming: `*.test.ts`.
- Run: `npm test`. Start from unit tests for stacks/constructs; see example in `test/cln-agency-api.test.ts`.

## Commit & Pull Requests
- Commits: imperative and scoped (e.g., `feat: add api stack`, `chore: update cdk context`).
- PRs: include summary, linked issues, screenshots or `cdk diff` output when infra changes; ensure `npm run build && npm test` pass.

## Security & Configuration
- Never commit secrets; use AWS SSO (`npm run aws:sso:login`).
- Stages: pass with `-c stage=<name>` (default `dev`).
- Tags like `project` and `stage` are applied in `bin/cln-agency-api.ts` for traceability.

