FROM node:20

WORKDIR /myapp

COPY . .

RUN npm install

EXPOSE 9999

ENTRYPOINT [ "npm","start" ]

