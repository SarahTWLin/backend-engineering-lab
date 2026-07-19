cd backend-service-nodejs && npx dotenv -e .env.dev -- npx prisma migrate dev 
docker compose exec backend npx prisma migrate deploy