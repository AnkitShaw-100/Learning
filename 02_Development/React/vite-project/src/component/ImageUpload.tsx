import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore';
import { database } from '../firebase';
const ImageUpload = () => {
    const [name, setName] = useState('');
      const [file, setFile] = useState(null);
      const [status, setStatus] = useState(''); // 'loading', 'uploaded', ''
      const [imageURL, setImageURL] = useState('');

      const collectionRef = collection(database, 'uploads');

      const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };

      const uploadToCloudinary = async (file) => {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'first_upload'); // your unsigned preset
        data.append('cloud_name', 'dgncmahiz'); // your cloud name
    
        try {
          setStatus('loading');
    
          const res = await fetch('https://api.cloudinary.com/v1_1/dgncmahiz/image/upload', {
            method: 'POST',
            body: data,
          });
    
          const result = await res.json();
          setStatus('uploaded');
          setImageURL(result.secure_url);
          return result.secure_url;
        } catch (error) {
          console.error('Cloudinary Upload Error:', error.message);
          alert('Image upload failed.');
          setStatus('');
          return null;
        }
      };

      const handleSubmit = async () => {
        if (!name || !file) {
          alert("Please provide both a name and image.");
          return;
        }
    
        const url = await uploadToCloudinary(file);
        if (!url) return;
    
        try {
          await addDoc(collectionRef, {
            name,
            imageURL: url,
            createdAt: new Date()
          });
    
          alert('Uploaded and saved to Firebase!');
          setName('');
          setFile(null);
          setImageURL('');
          setStatus('');
        } catch (err) {
          alert('Firebase error: ' + err.message);
        }
      };
  return (
    <div className="App">
    <h2>Upload Image & Save to Firebase</h2>

    <input
      type="text"
      placeholder="Enter name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <input type="file" onChange={handleFileChange} />

    {status === 'loading' && <p>Uploading...</p>}
    {status === 'uploaded' && <p>✅ Uploaded!</p>}

    <button onClick={handleSubmit}>Submit</button>

    {imageURL && <img src={imageURL} alt="Uploaded" width="200" />}
  </div>
  )
}

export default ImageUpload
