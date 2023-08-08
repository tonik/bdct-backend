ifneq (,$(wildcard ./.env))
    include .env
    export
endif

## ====================
## LOCAL DEPLOYMENT
## ====================

VERSION?= $(shell git rev-parse --short HEAD)
GIT_BRANCH?= $(shell git rev-parse --abbrev-ref HEAD)

OAS_PATH=oas/swagger.yml
REPORT_PATH?=$(shell ls oas/*)
REPORT_FILE_CONTENT_TYPE?=text/plain
VERIFIER_TOOL?=tap
DEPLOYMENT_TARGET?=production

ci: test can_i_deploy record_deployment

## ====================
## CI DEPLOYMENT
## ====================

install: yarn install

test:
	@echo "========== STAGE: test 🧪 =========="
	@echo "Running tests to test locally running provider"
	@yarn run test

publish_provider_contract:
	@echo "========== STAGE: publish-provider-contract =========="
	docker-compose run publish_provider_contract

can_i_deploy:
	@echo "========== STAGE: can-i-deploy? 🌉 =========="
	docker-compose run can_i_deploy

deploy:
	@echo "========== STAGE: deploy 🚀 =========="
	@echo "Deploying to prod"

record_deployment:
	docker-compose run record_deployment

.PHONY: start stop test