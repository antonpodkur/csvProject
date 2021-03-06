const mongoose = require('mongoose');

const DocumentScheme = mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'document'
    },
    data: {
        type: Array,
        required: true
    },
    uploaded_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    additional_data: {
        type: Array,
        required: false,
        default: []
    }
});

module.exports = mongoose.model('Documents', DocumentScheme);