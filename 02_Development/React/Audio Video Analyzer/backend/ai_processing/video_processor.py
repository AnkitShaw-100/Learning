import cv2
import numpy as np
import moviepy.editor as mp
import os
from audio_processor import analyze_audio
from typing import Dict, Any

def analyze_video(file_path: str) -> Dict[str, Any]:
    """
    Enhanced video analysis with:
    - Motion detection
    - Scene change detection
    - Visual emotion estimation
    - Object detection (placeholder)
    - Comprehensive metadata extraction
    """
    try:
        # Validate file exists
        if not os.path.exists(file_path):
            raise FileNotFoundError(f"Video file not found: {file_path}")

        # Extract audio from video
        video = mp.VideoFileClip(file_path)
        audio_path = os.path.splitext(file_path)[0] + '_audio.wav'
        video.audio.write_audiofile(audio_path, logger=None)  # Disable verbose logging
        
        # Analyze audio
        audio_result = analyze_audio(audio_path)
        
        # Video analysis setup
        cap = cv2.VideoCapture(file_path)
        fps = cap.get(cv2.CAP_PROP_FPS)
        frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        duration = float(frame_count / fps)
        
        # Initialize analysis variables
        motion_intensity = []
        scene_changes = []
        brightness_values = []
        color_dominance = []
        face_detection = []
        
        # Load models (placeholder - add your actual models)
        face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
        
        # Read first frame
        ret, prev_frame = cap.read()
        if not ret:
            raise Exception("Error reading the first frame")
            
        prev_gray = cv2.cvtColor(prev_frame, cv2.COLOR_BGR2GRAY)
        prev_hsv = cv2.cvtColor(prev_frame, cv2.COLOR_BGR2HSV)
        
        frame_number = 0
        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break
                
            frame_number += 1
            
            # Skip frames for performance (analyze every nth frame)
            if frame_number % 5 != 0:
                continue
                
            # Convert current frame
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
            
            # Motion detection
            frame_diff = cv2.absdiff(gray, prev_gray)
            motion_intensity.append(float(np.mean(frame_diff)))
            
            # Scene change detection (simplified)
            hist_diff = cv2.compareHist(
                cv2.calcHist([prev_hsv], [0, 1], None, [180, 256], [0, 180, 0, 256]),
                cv2.calcHist([hsv], [0, 1], None, [180, 256], [0, 180, 0, 256]),
                cv2.HISTCMP_CORREL
            )
            if hist_diff < 0.7:  # Threshold for scene change
                scene_changes.append(frame_number/fps)  # Store timestamp
                
            # Brightness analysis
            brightness_values.append(float(np.mean(gray)))
            
            # Color dominance (simplified)
            dominant_color = np.mean(hsv[:,:,0])  # Hue channel
            color_dominance.append(float(dominant_color))
            
            # Face detection (basic example)
            faces = face_cascade.detectMultiScale(gray, 1.1, 4)
            face_detection.append(len(faces))
            
            # Update previous frame
            prev_gray = gray
            prev_hsv = hsv
            
        cap.release()
        
        # Calculate video quality metrics (placeholder)
        quality_metrics = {
            "sharpness": float(np.mean(motion_intensity)),  # Simplified
            "contrast": float(np.std(brightness_values))
        }
        
        # Cleanup
        if os.path.exists(audio_path):
            os.remove(audio_path)
            
        return {
            "status": "success",
            "data": {
                "metadata": {
                    "duration": duration,
                    "fps": float(fps),
                    "frame_count": frame_count,
                    "resolution": f"{int(cap.get(3))}x{int(cap.get(4))}",
                    "format": os.path.splitext(file_path)[1][1:]
                },
                "motion_analysis": {
                    "average_motion": float(np.mean(motion_intensity)),
                    "motion_variance": float(np.var(motion_intensity)),
                    "motion_timeline": motion_intensity
                },
                "scene_analysis": {
                    "scene_change_count": len(scene_changes),
                    "scene_change_times": scene_changes
                },
                "visual_analysis": {
                    "average_brightness": float(np.mean(brightness_values)),
                    "color_dominance": float(np.mean(color_dominance)),
                    "face_detection_frames": sum(face_detection),
                    "face_presence_percentage": float(sum(face_detection)/len(face_detection)*100)
                },
                "quality_metrics": quality_metrics,
                "audio_analysis": audio_result.get("data", {})
            }
        }
        
    except Exception as e:
        return {
            "status": "error",
            "message": str(e),
            "error_type": type(e).__name__
        }

# Example usage with error handling
if __name__ == "__main__":
    video_path = r"C:\Users\nihar\Downloads\audio-video-analyzer-main\audio-video-analyzer-main\backend\uploads\video.mp4"
    try:
        result = analyze_video(video_path)
        print(json.dumps(result, indent=2))
    except Exception as e:
        print(f"Error analyzing video: {str(e)}")