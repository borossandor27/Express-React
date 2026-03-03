FROM node:20-alpine

WORKDIR /app

# Package fájlok másolása
COPY package*.json ./

# Függőségek telepítése
RUN npm ci --only=production

# Alkalmazás kód másolása
COPY . .

# Port beállítása
EXPOSE 5000

# Alkalmazás indítása
CMD ["node", "server.js"]