docker compose down
docker compose --env-file backend-service-nodejs/.env up -d --build
./scripts/migrate-and-deploy-schema.sh