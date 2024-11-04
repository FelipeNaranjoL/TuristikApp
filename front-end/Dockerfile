# Fase 1: Construcción
FROM node:20 AS build

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el código del front-end y compilar
COPY . .
RUN npm run build

# Fase 2: Servidor Nginx
FROM nginx:alpine

# Copiar los archivos de la build al servidor Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
