FROM node:lts-bookworm-slim

WORKDIR /app

COPY package.json ./

RUN npm install -g npm@10.8.1

COPY . .

EXPOSE 3000

CMD [ "node", "start" ]