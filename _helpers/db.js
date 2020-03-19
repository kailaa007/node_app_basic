const config = require('../config/config');
const mongoose = require('mongoose');

/** MongoDB Connection */

mongoose.connect(config.DB_URL, { useMongoClient: true });
mongoose.connection.on('error', function (error) {
    console.error('Error in MongoDb connection: ' + error);
});
mongoose.connection.on('connected', function () {
    console.log('Good day!');
});
mongoose.connection.on('reconnected', function () {
    console.log('MongoDB reconnected!');
});
mongoose.connection.on('disconnected', function () {
    console.log('MongoDB disconnected!');
});

module.exports = {
    User: require('../schemas/userSchema')
};