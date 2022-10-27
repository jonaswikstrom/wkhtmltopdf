FROM surnet/alpine-node-wkhtmltopdf:10.15.1-0.12.5-small

EXPOSE 8080

ADD app app

WORKDIR /app

RUN npm install --production

CMD [ "node","app.js" ]
