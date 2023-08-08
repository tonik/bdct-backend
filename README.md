[![Can I deploy Status](https://ermingo.pactflow.io/pacticipants/backend/branches/main/latest-version/can-i-deploy/to-environment/production/badge)](https://ermingo.pactflow.io/pacticipants/backend/branches/main/latest-version/can-i-deploy/to-environment/production/badge)

## Description
This backend application is part of a bi-directional contract testing example built using Fastify, Fastify CLI, `@fastify/swagger`, `zod` and `tap`. The application is the provider in our contract testing example.

## Features
- API Documentation using `@fastify/swagger` with schemas defined using Zod
- Testing using `tap`
- Bi-directional Contract testing using `Pact`
- CI/CD integration through `GitHub Actions`


## Technologies Used
- `fastify`
- `@fastify/swagger`
- `fastify/cli`
- `zod`
- `tap`
- `Pact`
- `Docker`

## Requirements
- Node.js v18
- Docker

## CI Workflow

### test
The test job is run on every push to the main branch. It starts by setting up Node.js, installs dependencies using Yarn, then runs the tests defined in the Makefile via `make test`. After successful test execution, it publishes the provider contract using `make publish_provider_contract`.

Environment variables are defined to specify the Pact Broker Base URL, Pact Broker Token, the name of the participant (in this case, 'backend'), and other variables related to reporting and versioning.

### can_i_deploy
The can_i_deploy job is dependent on the test job and only runs if the test job passes. It checks if it's safe to deploy the provider (backend in this case) to production using make can_i_deploy.

### deployment
The deployment job depends on the can_i_deploy job and only runs if the can_i_deploy job passes. It deploys the backend and records the deployment using make deploy and make record_deployment commands respectively.

## Local Deployment
### Setup
- Create a .env file in the root directory and add the following variables:
```
PACT_BROKER_BASE_URL=https://****.pactflow.io
PACT_BROKER_TOKEN=1234567890
PACTICIPANT=name-of-your-service
PORT=4000
```

### Development
Run the following command to start the app in development mode:

```bash
yarn dev
```

### Test
To map the CI process locally execute the command:
```bash
make ci
```
