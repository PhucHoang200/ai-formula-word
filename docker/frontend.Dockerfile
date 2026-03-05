FROM node:20

WORKDIR /app

COPY frontend/package.json frontend/package-lock.json* ./

RUN npm install

COPY frontend /app

RUN npm run build

# Mặc định khi build xong sẽ chạy bản Production
CMD ["npm","run","start"]