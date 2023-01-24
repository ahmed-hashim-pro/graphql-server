FROM node:16

ENV NODE_ENV=production
# Create app directory
WORKDIR /dist

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000
#EXPOSE 8080

CMD npm start
