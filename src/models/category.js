const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    activity: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Activity'
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;