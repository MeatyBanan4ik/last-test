FROM node:20-alpine

WORKDIR /home/node/worker

COPY ./ /home/node/worker

RUN apk add make

RUN make build

CMD [ "yarn", "dev" ]
