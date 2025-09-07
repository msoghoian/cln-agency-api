# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

**Development & Testing:**
- `npm run build` - Compile TypeScript
- `npm run watch` - Watch for changes and recompile
- `npm run lint` - Run ESLint with TypeScript support
- `npm run test` - Run Jest unit tests

**AWS Deployment:**
- `npm run aws:sso:login:dev` - AWS SSO login for dev environment
- `npm run cdk:bootstrap:dev` - Bootstrap CDK for first deployment
- `npm run cdk:synth:dev` - Synthesize CloudFormation template
- `npm run cdk:deploy:dev` - Deploy to dev environment
- `npm run cdk:destroy:dev` - Destroy dev environment

## Architecture Overview

This is a TypeScript-based AWS CDK application for the California Local News Agency API that provides presigned URL generation for S3 uploads.

### Stage-Aware Configuration
The project uses multi-stage configuration (`dev`, `test`, `prod`) with separate AWS accounts defined in `config/stages.ts`. Use CDK context for stage selection: `-c stage=dev`.

### Modular Infrastructure Pattern
The CDK stack follows a "hooks" pattern where each AWS service has its own module (`useS3`, `useLambdas`, `useApiGateway`, etc.) in the `lib/` directory. Resources are created through functional approaches using "use" prefixed functions rather than classes.

**Key files:**
- `lib/cln-agency-api-stack.ts` - Main stack orchestrating all resources
- `lib/types.ts` - TypeScript interfaces for all resource types
- `config/stages.ts` - Environment-specific configurations
- `src/lambdas/` - Lambda function source code

### Resource Dependencies
The architecture uses explicit dependency management between CDK constructs. API Gateway deployments are created after all resources to ensure proper integration. Lambda integrations automatically create necessary invoke permissions.

### Path Aliases
Clean import structure using TypeScript path aliases:
- `@config/*` → `config/*`
- `@lib/*` → `lib/*`
- `@bin/*` → `bin/*`
- `@test/*` → `test/*`

### Lambda Configuration
- **Runtime:** Node.js 22.x with ES modules
- **Bundler:** esbuild with tree-shaking, minification, and source maps
- **Environment:** Type-safe environment variables using enums from `src/types.ts`

### API Structure
RESTful API following pattern: `/agency/presigned-url/{fileName}` with CloudWatch logging and stage-specific deployment.

## Development Patterns

### Error Handling
Lambda functions must return proper API Gateway response objects with `statusCode`, `headers`, and `body` properties. Never return raw strings or objects directly.

### Environment Variables
Use the `LambdaEnvVars` enum from `src/types.ts` for type-safe environment variable access.

### Resource Naming
Follow the pattern: `resourceType-${stageName}` for stage-specific resource naming.

### IAM Policies
Use principle of least privilege with specific policy statements defined in `lib/policyStatements.ts` and attached via `lib/policies.ts`.

## Tooling

- **ESLint:** Modern flat config with TypeScript support
- **Prettier:** Single quotes, semicolons, trailing commas
- **TypeScript:** Strict mode with ES2022 target
- **Jest:** Unit testing with `ts-jest`
- **HTTP Requests:** Test files in `http-requests/` directory