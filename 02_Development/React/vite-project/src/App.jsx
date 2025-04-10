import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from './firebase.js'; // <-- now includes database
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from './firebase';

function App() {
  const [data, setData] = useState({});
  const collectionRef = collection(database, "users");

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  }

  // const handleInput = (e) => {
  //   const newInput = { [e.target.name]: e.target.value };
  //   setData({ ...data, ...newInput });
  // };

  // const handleSubmit = () => {
  //   createUserWithEmailAndPassword(auth, data.email, data.password)
  //     .then((userCredential) => {
  //       console.log("User created:", userCredential.user);
  //       alert("User created successfully!");
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };

  const handleSubmit = () => {
    addDoc(collectionRef, {
      email: data.email,
      password: data.password
    })
      .then(() => {
        alert("Data Added");
      })
      .catch((err) => {
        alert(err.message);
      })
  }

  const uploadFile = (file) => {
    const storageRef = ref(storage, `uploads/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a file!');
      getDownloadURL(snapshot.ref).then((url) => {
        console.log("Download URL:", url);
      });
    });
  };

  return (
    <div className="App">
      <input name="email" placeholder="Email" onChange={handleInput} />
      <input name="password" placeholder="Password" type="password" onChange={handleInput} />
      
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
