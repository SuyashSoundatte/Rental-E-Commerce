# for devlopement 
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./ yarn.lock ./ tsconfig.json ./

COPY src ./src

RUN yarn install 

RUN yarn build 


# for production 
FROM node:22-alpine AS production

WORKDIR /appr

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --production

COPY --from=builder /app/dist ./dist

COPY --from=builder /app/dist/index.js ./index.js

EXPOSE 3000

CMD ["node", "index.js"]