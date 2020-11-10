const pg = require("pg")
require("dotenv").config()

//uncomment the line below if you are workign on heroku servers
//pg.defaults.ssl = true;
// PORT=5432

module.exports = {
  development: {
    client: "pg",
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    migration: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./database/development/seeds"
    }
  },

  // production: {
  //   client: "pg",
  //   connection: {
  //      // use to hook up to Heroku
  //     // connection: process.env.DATABASE_URL,
  //     host: process.env.POSTGRESS_DEV_HOST,
  //     port: process.env.POSTGRESS_DEV_PORT,
  //     user: process.env.POSTGRESS_DEV_USER,
  //     password: process.env.POSTGRESS_DEV_PASSWORD,
  //     database: process.env.POSTGRESS_DEV_DATABASE
  //   },
  //   migration: {
  //     directory: "./database/development/migrations"
  //   },
  //   seeds: {
  //     directory: "./database/development/seeds"
  //   }
  // }
};
