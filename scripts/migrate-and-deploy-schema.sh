cd ../backend-service-nodejs && npx prisma migrate dev 
docker compose exec backend npx prisma migrate deploy