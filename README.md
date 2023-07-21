## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Commit Message Standards 
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
We are using the following conventions to identify what the commit is doing:

- **FEAT**: A new feature.
- **FIX**: A bug fix.
- **DOCS**: Changes to documentation
- **STYLE**: Formatting, missing semi colons, etc; no code change.
- **REFACTOR**: Refactor: refactoring production code.
- **TEST**: Adding tests, refactoring test; no production code change
- **CHORE**: updating build tasks, package manager configs, etc; no production code change.
- **BUILD**: Changes to build config, a new release.

## Stay in touch

- Author - [Liaqat Saeed](https://liaqatsaeed6777.com)
- Website - [https://nestjs.com](https://liaqatsaeed6777.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)


## Authentication

We'll start with the first requirement: authenticating a user. We'll then extend that by issuing a JWT. Finally, we'll create a protected route that checks for a valid JWT on the request.

## Creating an authentication module

We'll start by generating an **AuthModule** and in it, an **AuthService** and an **AuthController**. We'll use the AuthService to implement the authentication logic, and the AuthController to expose the authentication endpoints.

### Commands

- `$ nest g module auth
$ nest g controller auth
$ nest g service auth`

