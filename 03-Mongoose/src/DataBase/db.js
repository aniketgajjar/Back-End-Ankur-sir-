const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect('mongodb+srv://user-database:CHcqIbSrLGQiyHPS@back-end-mastery.tg1gn9i.mongodb.net/helly');

    console.log('MongoDB connected!');
};

module.exports = connectDB;