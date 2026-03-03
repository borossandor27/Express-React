# Node verzió fixálása
FROM node:20

# App könyvtár
WORKDIR /app

# Package fájlok másolása
COPY package*.json ./

# Függőségek telepítése
RUN npm install

# Forráskód másolása
COPY . .

# Port
EXPOSE 3000

# Indítás
CMD ["npm", "start"]