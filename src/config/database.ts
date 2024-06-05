import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database_development', 'postgres', 'docker', {
  host: '127.0.0.1',
  port: 5432,
  dialect: 'postgres',
  logging: false,
});

export default sequelize;

module.exports = {
  development: {
    username: 'docker',
    password: 'docker',
    database: 'auth_database_development',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  test: {
    username: 'docker',
    password: 'docker',
    database: 'auth_database_test',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  production: {
    username: 'docker',
    password: 'docker',
    database: 'auth_database_production',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
};