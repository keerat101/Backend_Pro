const multer = require("multer");
const { parseCSV } = require("../utils/csvParser");
const Request = require("../models/Request");
const { enqueueProcessing } = require("../jobs/imageProcessor");

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });

exports.uploadCSV = async (req, res) => {
    try {
        const file = req.file;
        const products = await parseCSV(file.path);

        // Create new request
        const newRequest = new Request({
            requestId: new mongoose.Types.ObjectId(),
            products,
        });
        await newRequest.save();

        // Enqueue for processing
        await enqueueProcessing(newRequest);

        res.status(200).json({ requestId: newRequest.requestId });
    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ error: "Failed to process CSV" });
    }
};
