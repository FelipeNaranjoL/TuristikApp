# Imagen base de Node.js
FROM node:20

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar todo el código de la aplicación
COPY . .

# Exponer el puerto 3001 para el back-end
EXPOSE 3001

# Comando para iniciar el servidor
CMD ["npm", "start"]
