/**
 * Created by haos on 12/01/2017.
 */
const Mongoose = require('mongoose');

const dbConfig = require('./db.config.js');
const env = require('../config/env.config.js');

Mongoose.connect('mongodb://' + dbConfig[env].host + ':' + dbConfig[env].port + '/' + dbConfig[env].database, {
    user: dbConfig[env].username,
    pass: dbConfig[env].password
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to database: ' + dbConfig[env].database)
});