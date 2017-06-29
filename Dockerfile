FROM node:6.11.0

RUN mkdir /app
WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn install

COPY . /app

EXPOSE 4000
EXPOSE 5858

CMD ["npm", "run", "dev"]
