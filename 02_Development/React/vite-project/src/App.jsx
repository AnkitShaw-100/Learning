// AuthForm.js

/* import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

function AuthForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInput = (e) => {
    const newInput = { [e.target.name]: e.target.value };
    setFormData((prev) => ({ ...prev, ...newInput }));
  };

  const handleAuthSubmit = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("User created:", userCredential.user);
      alert("User signed up successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input name="email" placeholder="Email" onChange={handleInput} />
      <input name="password" type="password" placeholder="Password" onChange={handleInput} />
      <button onClick={handleAuthSubmit}>Sign Up</button>
    </div>
  );
}

export default AuthForm; */


// UserForm.js
/* import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { database } from './firebase';

function UserForm() {
  const [data, setData] = useState({
    email: '',
    password: '',
    fullName: '',
    age: '',
    phone: '',
    address: '',
  });

  const collectionRef = collection(database, 'users');

  const handleInput = (e) => {
    const newInput = { [e.target.name]: e.target.value };
    setData((prev) => ({ ...prev, ...newInput }));
  };

  const handleSubmit = async () => {
    const { email, password, fullName, age, phone, address } = data;

    if (!email || !password || !fullName) {
      alert("Please fill out required fields (Email, Password, Full Name)");
      return;
    }

    try {
      await addDoc(collectionRef, {
        email,
        password,
        fullName,
        age: age ? parseInt(age) : null,
        phone,
        address,
        createdAt: new Date(),
      });

      alert("User data added to Firestore!");
      setData({
        email: '',
        password: '',
        fullName: '',
        age: '',
        phone: '',
        address: '',
      });
    } catch (err) {
      alert("Error adding document: " + err.message);
    }
  };

  return (
    <div>
      <h2>Add User to Firestore</h2>

      <input name="fullName" placeholder="Full Name" value={data.fullName} onChange={handleInput} />
      <input name="email" placeholder="Email" value={data.email} onChange={handleInput} />
      <input name="password" type="password" placeholder="Password" value={data.password} onChange={handleInput} />
      <input name="age" type="number" placeholder="Age" value={data.age} onChange={handleInput} />
      <input name="phone" placeholder="Phone Number" value={data.phone} onChange={handleInput} />
      <input name="address" placeholder="Address" value={data.address} onChange={handleInput} />

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default UserForm; */

// UserFormWithPhoto.js
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { database } from './firebase'; // Removed Firebase Storage

function UserFormWithPhoto() {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
  });
  const [file, setFile] = useState(null);

  const collectionRef = collection(database, 'users');

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // ✅ Cloudinary upload function
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'my_unsigned_preset'); // ✅ Your unsigned preset
    formData.append('cloud_name', 'your_cloud_name'); // 🔁 Replace with actual Cloudinary cloud name

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      console.log("Cloudinary URL:", data.secure_url);
      return data.secure_url;
    } catch (error) {
      console.error("Cloudinary upload failed:", error.message);
      alert("Image upload failed.");
      return null;
    }
  };

  const handleSubmit = async () => {
    const { fullName, email, password, phone } = data;

    if (!fullName || !email || !password) {
      alert("Please fill required fields.");
      return;
    }

    try {
      let photoURL = "No file uploaded";
      if (file) {
        photoURL = await uploadToCloudinary(file);
        if (!photoURL) return; // Exit if upload failed
      }

      await addDoc(collectionRef, {
        fullName,
        email,
        password,
        phone,
        photoURL,
        createdAt: new Date(),
      });

      alert("User data saved with photo!");
      setData({ fullName: '', email: '', password: '', phone: '' });
      setFile(null);
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div>
      <h2>Register User with Photo</h2>

      <input name="fullName" placeholder="Full Name" value={data.fullName} onChange={handleInput} />
      <input name="email" placeholder="Email" value={data.email} onChange={handleInput} />
      <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleInput} />
      <input name="phone" placeholder="Phone" value={data.phone} onChange={handleInput} />

      <input type="file" onChange={handleFileChange} />
      {file && <p>Selected: {file.name}</p>}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UserFormWithPhoto;



// Optimize and Transform Cloudinary
// import React from 'react'
// import { Cloudinary } from '@cloudinary/url-gen';
// import { auto } from '@cloudinary/url-gen/actions/resize';
// import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
// import { AdvancedImage } from '@cloudinary/react';

// const App = () => {
//   const cld = new Cloudinary({ cloud: { cloudName: 'dgncmahiz' } });
  
//   // Use this sample image or upload your own via the Media Explorer
//   const img = cld
//         .image('cld-sample-5')
//         .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
//         .quality('auto')
//         .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

//   return (<AdvancedImage cldImg={img}/>);
// };

// export default App