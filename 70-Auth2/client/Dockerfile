FROM node:20-alpine

WORKDIR /app

# Package fájlok másolása
COPY package*.json ./

# Függőségek telepítése
RUN npm install

# Alkalmazás kód másolása
COPY . .

# Port beállítása
EXPOSE 3000

# Development szerver indítása (hot-reload)
CMD ["npm", "start"]