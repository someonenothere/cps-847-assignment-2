FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /react-app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "npm", "start" ]
