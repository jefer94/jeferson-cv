FROM node:13

ARG PORT
ARG DEBUG
ARG TEST

ENV PORT=3000
ENV DEV=true

WORKDIR /usr/src

COPY package.json .
COPY yarn.lock .

RUN npm i -g serve
RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]