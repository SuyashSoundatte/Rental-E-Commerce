# for devlopement 
FROM node:22-alpine AS builder


WORKDIR /app

COPY package*.json ./ yarn.lock ./ tsconfig.json ./

RUN yarn install 

COPY src ./src


RUN yarn build 


FROM node:22-alpine AS prodbuilder

RUN addgroup -S appgrp && adduser -S app -G appgrp

USER app

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --production

COPY --from=builder /app/dist ./dist

COPY --from=builder /app/dist/index.js ./index.js

# for production 
FROM gcr.io/distroless/nodejs22-debian12 AS production


WORKDIR /app

COPY --from=prodbuilder /app/node_modules  ./node_modules

COPY --from=prodbuilder /app/dist ./dist

COPY --from=prodbuilder /app/dist/index.js ./index.js

EXPOSE 3000

CMD ["index.js"]