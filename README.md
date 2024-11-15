### Project: Asynchronous Image Processing System from CSV

This project is an asynchronous image processing system built to handle image data efficiently from CSV files. It includes functionality to validate, process, store, and provide updates on image processing statuses. The core features include:

- **File Upload**: Accepts CSV files containing product data and image URLs. Returns a unique request ID immediately upon submission.
- **Data Validation**: Ensures that CSV data meets formatting requirements before processing.
- **Image Processing**: Asynchronously compresses images to 50% of their original quality.
- **Data Storage**: Saves processed image URLs and product information to a database.
- **Status Check API**: Allows users to query the processing status using the request ID.
- **Webhook Integration (Bonus)**: Optionally triggers a webhook after processing completion to notify external systems.

### Key Components:
- **API Endpoints**: Upload API for CSV submissions, Status API for processing status checks.
- **Asynchronous Processing**: Background workers handle image processing tasks independently.
- **Database Integration**: Tracks status and stores product image data.
- **Technical Documentation**: Detailed system architecture, API specs, and asynchronous worker documentation included.
  
### Tech Stack:
- **Languages**: Node.js or Python
- **Databases**: SQL or NoSQL options
