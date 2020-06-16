require('env2')('./.env');

const {env} = process;

module.exports = {
  "development": {
    "username": env.DB_USERNAME,
    "password": env.DB_PASSWORD,
    "database": env.DB_NAME,
    "host": env.DB_HOST,
    "port": env.DB_PORT,
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": env.DB_USERNAME,
    "password": env.DB_PASSWORD,
    "database": env.DB_NAME,
    "host": env.DB_HOST,
    "port": env.DB_PORT,
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": env.DB_USERNAME,
    "password": env.DB_PASSWORD,
    "database": env.DB_NAME,
    "host": env.DB_HOST,
    "port": env.DB_PORT,
    "dialect": "postgres",
    "operatorsAliases": false
  }
}
