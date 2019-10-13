FROM node:dubnium-alpine

RUN npm install -g yarn

COPY package.json /app/package.json

COPY yarn.lock /app/yarn.lock

WORKDIR /app

RUN yarn

COPY . /app

ENV NODE_ENV=production

CMD ["yarn", "start:prod"]
