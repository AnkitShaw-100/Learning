from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from audio_processor import analyze_audio
from video_processor import analyze_video
import os
import shutil

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.post("/analyze/audio")
async def analyze_audio_file(file: UploadFile = File(...)):
    try:
        # Save uploaded file
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        # Process the file
        result = analyze_audio(file_path)
        
        # Clean up (optional)
        os.remove(file_path)
        
        return result
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Audio processing error: {str(e)}"
        )

@app.post("/analyze/video")
async def analyze_video_file(file: UploadFile = File(...)):
    try:
        # Save uploaded file
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        # Process the file
        result = analyze_video(file_path)
        
        # Clean up (optional)
        os.remove(file_path)
        
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)