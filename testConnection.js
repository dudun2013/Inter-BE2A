// testConnection.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('video_belajar', 'root', 'Dudunsuparmaidi1974', {
    host: 'localhost',
    dialect: 'mysql',
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();