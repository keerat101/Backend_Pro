const fs = require("fs");
const parse = require("csv-parse");

// Function to parse and validate the CSV file
const parseCSV = (filePath) => {
    return new Promise((resolve, reject) => {
        const products = [];
        fs.createReadStream(filePath)
            .pipe(parse({ columns: true, trim: true }))
            .on("data", (row) => {
                if (!row["Serial Number"] || !row["Product Name"] || !row["Input Image Urls"]) {
                    return reject(new Error("CSV file format is incorrect"));
                }
                products.push({
                    serialNumber: parseInt(row["Serial Number"]),
                    productName: row["Product Name"],
                    inputUrls: row["Input Image Urls"].split(",").map((url) => url.trim()),
                });
            })
            .on("end", () => resolve(products))
            .on("error", (error) => reject(error));
    });
};

module.exports = { parseCSV };
