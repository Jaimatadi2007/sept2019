const mongoose = require('mongoose');
let schema = mongoose.Schema;
let adminSchema = new schema({

    username: {
        type: String,
        unique: true
    },
    password: String,
})

module.exports = mongoose.model('admin', adminSchema);