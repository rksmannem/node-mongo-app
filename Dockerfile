FROM node:12-alpine

# create and app directory
WORKDIR /usr/src/app

RUN chown -R node:node /usr/src/app

COPY package*.json .

USER node

RUN npm install

# copy all app files to the container
COPY --chown=node:node . .

CMD ["npm", "start"]