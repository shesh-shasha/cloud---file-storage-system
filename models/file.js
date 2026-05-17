const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },

    path: {
        type: String,
        required: true
    },

    uploadedAt: {
        type: Date,
        default: Date.now
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model("File", fileSchema);