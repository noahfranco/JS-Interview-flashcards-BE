const pg = require("pg")
require("dotenv").config()

//uncomment the line below if you are workign on heroku servers
// pg.defaults.ssl = true;

module.exports = {
  development: {
    client: "pg",
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    migration: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  },

  production: {
    client: "pg",
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    migration: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    },
  }
}
