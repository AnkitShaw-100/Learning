import sys
import json
import os
import librosa
import numpy as np
import speech_recognition as sr
from pydub import AudioSegment
from transformers import pipeline  # For advanced sentiment analysis

# Initialize sentiment analysis model
sentiment_analyzer = pipeline("sentiment-analysis", model="distilbert-base-uncased-finetuned-sst-2-english")

def convert_to_wav(audio_path):
    """Convert audio file to WAV format if needed"""
    file_ext = os.path.splitext(audio_path)[1].lower()
    if file_ext == ".wav":
        return audio_path

    sound = AudioSegment.from_file(audio_path)
    wav_path = os.path.splitext(audio_path)[0] + ".wav"
    sound.export(wav_path, format="wav")
    return wav_path

def extract_audio_features(y, sr):
    """Extract advanced audio features using librosa"""
    features = {}
    
    # Pitch and tone analysis
    pitches, magnitudes = librosa.piptrack(y=y, sr=sr)
    features["pitch_mean"] = float(np.mean(pitches[pitches > 0]))
    features["pitch_std"] = float(np.std(pitches[pitches > 0]))
    
    # Spectral features
    features["spectral_centroid"] = float(np.mean(librosa.feature.spectral_centroid(y=y, sr=sr)))
    features["spectral_bandwidth"] = float(np.mean(librosa.feature.spectral_bandwidth(y=y, sr=sr)))
    
    # Rhythm features
    features["tempo"] = float(librosa.beat.tempo(y=y, sr=sr)[0])
    
    # MFCCs (voice characteristics)
    mfccs = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=13)
    features["mfccs"] = [float(np.mean(coeff)) for coeff in mfccs]
    
    # Emotion indicators
    features["zero_crossing_rate"] = float(np.mean(librosa.feature.zero_crossing_rate(y)))
    features["harmonic_ratio"] = float(np.mean(librosa.effects.harmonic(y)))
    features["percussive_ratio"] = float(np.mean(librosa.effects.percussive(y)))
    
    # Loudness
    features["rms_energy"] = float(np.mean(librosa.feature.rms(y=y)))
    
    return features

def transcribe_audio(wav_path):
    """Convert speech to text using Google's API"""
    recognizer = sr.Recognizer()
    with sr.AudioFile(wav_path) as source:
        audio = recognizer.record(source)
    try:
        return recognizer.recognize_google(audio)
    except sr.UnknownValueError:
        return "Could not understand audio"
    except sr.RequestError as e:
        return f"API Error: {str(e)}"

def analyze_emotion(audio_features):
    """Predict emotion based on audio features"""
    # Simple heuristic - replace with ML model for better accuracy
    if audio_features["harmonic_ratio"] > 0.8 and audio_features["pitch_mean"] > 200:
        return "happy"
    elif audio_features["pitch_std"] > 50 and audio_features["zero_crossing_rate"] > 0.1:
        return "angry"
    elif audio_features["pitch_mean"] < 150 and audio_features["tempo"] < 80:
        return "sad"
    return "neutral"

def analyze_audio(file_path):
    """Main analysis function"""
    try:
        # Convert to WAV if needed
        wav_path = convert_to_wav(file_path)
        
        # Load audio with librosa
        y, sr = librosa.load(wav_path, sr=None)
        
        # Extract audio features
        audio_features = extract_audio_features(y, sr)
        
        # Transcribe speech
        transcript = transcribe_audio(wav_path)
        
        # Analyze sentiment from text
        if len(transcript.split()) > 3:  # Only analyze if we have enough words
            sentiment = sentiment_analyzer(transcript[:512])[0]  # Truncate to 512 tokens
            text_sentiment = {
                "label": sentiment["label"],
                "score": float(sentiment["score"])
            }
        else:
            text_sentiment = {"label": "neutral", "score": 0.0}
        
        # Analyze emotion from audio features
        emotion = analyze_emotion(audio_features)
        
        # Clean up temporary WAV file if we created one
        if wav_path != file_path:
            os.remove(wav_path)
            
        return {
            "status": "success",
            "data": {
                "transcription": transcript,
                "text_sentiment": text_sentiment,
                "audio_features": audio_features,
                "predicted_emotion": emotion,
                "duration_seconds": float(len(y)/sr)
            }
        }
        
    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }

if __name__ == "__main__":
    try:
        audio_file_path = sys.argv[1]
        result = analyze_audio(audio_file_path)
        print(json.dumps(result, indent=2))
    except Exception as e:
        error_response = {
            "status": "error",
            "message": str(e)
        }
        print(json.dumps(error_response, indent=2))