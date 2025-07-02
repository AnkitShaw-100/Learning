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

import React, { useState } from 'react';
import ImageUpload from './component/ImageUpload';

function App() {
  return (
    <>
    <ImageUpload/>
    </>

  );
}

export default App;
