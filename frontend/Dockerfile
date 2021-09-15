FROM node:14-alpine

WORKDIR /app
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install --frozen-lockfile && \
    yarn global add pm2

COPY . .
RUN yarn build

EXPOSE 8080

CMD [ "pm2", "serve", "/app/build", "--no-daemon", "--spa" ]