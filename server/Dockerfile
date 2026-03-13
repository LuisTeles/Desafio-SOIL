# Estágio de Build
FROM node:20-alpine AS build

WORKDIR /app

# Copia arquivos de dependências
COPY package*.json ./
RUN npm install

# Copia o restante do código
COPY . .

# Gera o client do Prisma (necessário para o backend)
RUN npx prisma generate

# Compila o projeto NestJS
RUN npm run build

# Estágio de Produção
FROM node:20-alpine

WORKDIR /app

# Copia apenas o necessário do estágio de build para manter a imagem leve
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "run", "start:dev"]