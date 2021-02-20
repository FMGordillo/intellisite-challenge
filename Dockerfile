FROM node:14.15.5

RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server/dist

COPY package.json /usr/src/server

RUN npm install

COPY tsconfig.json /usr/src/server
COPY src/ /usr/src/server/src


RUN npm run build

CMD ["node", "index"]