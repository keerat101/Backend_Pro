const axios = require("axios");

exports.sendWebhook = async (url, data) => {
    try {
        await axios.post(url, data);
    } catch (error) {
        console.error("Webhook error:", error);
    }
};
