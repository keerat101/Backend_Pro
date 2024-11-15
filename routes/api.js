const express = require("express");
const { uploadCSV } = require("../controllers/uploadController");
const { getStatus } = require("../controllers/statusController");

const router = express.Router();

router.post("/upload", uploadCSV);
router.get("/status/:requestId", getStatus);

module.exports = router;
