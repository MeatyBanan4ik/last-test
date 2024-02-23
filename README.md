# Last Test?

### Table of Contents
**[Getting Started](#getting-started)**

- **[Deployment](#deployment)**
- **[Configure and Install dependencies](#configure-and-install-dependencies)**
- **[Run worker](#run-worker)**
- **[Run development](#run-development)**

**[Technologies](#technologies)**

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

#### Deployment

1. Clone this repository on your machine
2. Install dependencies and create your environment configuration file from example:
   ```shell script
   make build 
   ```
3. Set config data to `config.js` file
4. Run the app
   ```shell script
   yarn start
   ```

#### Configure and Install dependencies

```shell script
make build
```

#### Run worker

```shell script
yarn start
```

#### Run development

```shell script
yarn dev
```

### Technologies
1. [Node.js](https://nodejs.org/)
2. [Mongo](https://www.mongodb.com/)
3. [Express.JS](https://expressjs.com/)
4. [Mongoose](https://mongoosejs.com/)
5. [Log4JS](https://log4js-node.github.io/log4js-node/)
