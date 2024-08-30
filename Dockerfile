FROM node:lts-slim

WORKDIR /app

COPY . .

RUN npm install -g npm@10.8.1

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]