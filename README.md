# POSTGRESQL using Sequelize on Node.js Express

This is a practise tutorial to understand using the Sequelize package with Node.js Express.

## Credits

Basic tutorial structure was from [https://www.bezkoder.com/node-express-sequelize-postgresql/](https://www.bezkoder.com/node-express-sequelize-postgresql/) with credit to bezkoder.

## Dependencies

Nodemon is used in dev enviroment.

```
npm i express dotenv colors cors sequelize pg pg-hstore --save
npm i -D nodemon
```

## .env file

File needs to contain the following:

```
PORT=port number
CORS_URL=cors url
PG=postgres connection string
NODE_ENV=enviroment
```
