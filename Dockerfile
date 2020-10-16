FROM node:12-alpine

LABEL author="Ramakrishna Mannem"

ENV PORT=3000
ENV NODE_ENV=production

# create and app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci


COPY . ./

EXPOSE $PORT

CMD ["npm", "start"]