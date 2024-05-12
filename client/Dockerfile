FROM node:18-alpine
WORKDIR /Docker-Compose-Example/frontend

COPY . /Docker-Compose-Example/frontend/

EXPOSE 3000

RUN npm install

RUN npm run build

CMD [ "npm","run","start" ]