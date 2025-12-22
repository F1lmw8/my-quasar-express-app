FROM node:20-alpine AS builder


WORKDIR /app


COPY package*.json ./
RUN npm ci


COPY . .
# Generate Prisma Client (dummy DB URL for build time)
RUN DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy" npx prisma generate
RUN npm run build


# Stage 2: Production
FROM node:20-alpine


WORKDIR /app


COPY --from=builder /app /app


# สร้าง logs dir
RUN mkdir -p logs


# Healthcheck (เพิ่มความซับซ้อน: เช็คว่า server พร้อม)
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:3000/api/demo || exit 1


EXPOSE 3000


CMD ["node", "dist/server.js"]
