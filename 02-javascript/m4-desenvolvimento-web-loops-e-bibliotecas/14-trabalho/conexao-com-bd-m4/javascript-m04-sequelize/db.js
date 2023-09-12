const Sequelize = require('sequelize');

const sequelize = new Sequelize('company', 'manager', 'manage', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;