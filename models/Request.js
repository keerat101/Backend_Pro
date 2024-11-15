const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
    requestId: String,
    status: { type: String, default: "pending" },
    products: [
        {
            serialNumber: Number,
            productName: String,
            inputUrls: [String],
            outputUrls: [String],
        },
    ],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Request", RequestSchema);
