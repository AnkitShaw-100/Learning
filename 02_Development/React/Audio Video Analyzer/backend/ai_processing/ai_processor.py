from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from audio_processor import analyze_audio
from video_processor import analyze_video
import os
import shutil
from typing import Dict, Any

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

@app.post("/analyze/audio", response_model=Dict[str, Any])
async def analyze_audio_file(file: UploadFile = File(...)):
    try:
        # Save uploaded file
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        # Process the file
        result = analyze_audio(file_path)
        
        # Clean up
        os.remove(file_path)
        
        # Handle error cases
        if result["status"] == "error":
            raise HTTPException(status_code=400, detail=result["message"])
        
        return {"success": True, "results": result["data"]}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/analyze/video", response_model=Dict[str, Any])
async def analyze_video_file(file: UploadFile = File(...)):
    try:
        # Save uploaded file
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        # Process the file
        result = analyze_video(file_path)
        
        # Clean up
        os.remove(file_path)
        
        # Handle error cases
        if result["status"] == "error":
            raise HTTPException(status_code=400, detail=result["message"])
        
        return {"success": True, "results": result["data"]}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)