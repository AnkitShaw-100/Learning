const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const app = express();
const port = process.env.PORT || 5000;


const mkdirAsync = promisify(fs.mkdir);
const unlinkAsync = promisify(fs.unlink);


app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));


const uploadsDir = path.join(__dirname, 'uploads');
const ensureUploadsDir = async () => {
  try {
    await mkdirAsync(uploadsDir, { recursive: true });
  } catch (err) {
    console.error('Error creating uploads directory:', err);
  }
};


const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    await ensureUploadsDir();
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, `${uniqueSuffix}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 100 * 1024 * 1024
  }
});


const processFile = async (filePath) => {
  try {

    await fs.promises.access(filePath, fs.constants.F_OK);


    await new Promise(resolve => setTimeout(resolve, 2000));

    return { success: true, message: 'File processed successfully' };
  } catch (error) {

    try {
      await unlinkAsync(filePath);
    } catch (cleanupError) {
      console.error('Cleanup failed:', cleanupError);
    }
    throw error;
  }
};


app.post('/upload/audio', upload.single('audio'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No audio file uploaded'
      });
    }

    const result = await processFile(req.file.path);
    res.json({
      success: true,
      message: result.message,
      fileUrl: `/uploads/${req.file.filename}`
    });
  } catch (error) {
    console.error('Audio processing error:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing audio file',
      error: error.message
    });
  }
});


app.post('/upload/video', upload.single('video'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No video file uploaded'
      });
    }

    const result = await processFile(req.file.path);
    res.json({
      success: true,
      message: result.message,
      fileUrl: `/uploads/${req.file.filename}`
    });
  } catch (error) {
    console.error('Video processing error:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing video file',
      error: error.message
    });
  }
});


app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});


app.listen(port, async () => {
  await ensureUploadsDir();
  console.log(`🚀 Server running at http://localhost:${port}`);
});