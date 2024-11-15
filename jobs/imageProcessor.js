const Queue = require("bull");
const sharp = require("sharp");
const Request = require("../models/Request");

const imageQueue = new Queue("image processing");

// Enqueue image processing
exports.enqueueProcessing = async (request) => {
    await imageQueue.add({ requestId: request.requestId });
};

// Image processing function
imageQueue.process(async (job) => {
    const { requestId } = job.data;
    const request = await Request.findOne({ requestId });
    if (!request) throw new Error("Request not found");

    const outputUrls = [];
    for (const product of request.products) {
        const processedUrls = await Promise.all(
            product.inputUrls.map(async (url, index) => {
                const outputPath = `public/output_${requestId}_${index}.jpg`;
                await sharp(url).resize({ width: 500 }).toFile(outputPath);
                return outputPath;
            })
        );
        outputUrls.push(...processedUrls);
    }
    request.status = "completed";
    request.products.forEach((product, index) => {
        product.outputUrls = outputUrls.slice(index * product.inputUrls.length);
    });
    await request.save();
});
