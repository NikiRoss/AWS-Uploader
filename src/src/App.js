import './App.css';
import {useState, useEffect, useCallback } from 'react';
import axios from 'axios'
import { useDropzone } from 'react-dropzone';

const headers = {
  headers: {
    "Content-Type":"application/json",
    "Allow-Control-Allow-Origin":"*"
  }
}

const UserProfiles = () => {

  const [userProfiles, setUserProfiles] = useState([])

  const fetchUserProfiles = () => {
    axios.get('http://localhost:8080/api/v1/user-service', headers)
    .then(res => {
      console.log(res);
      setUserProfiles(res.data)
    });
  }

  useEffect(() => {
    fetchUserProfiles()
  }, []);

  return userProfiles.map((userProfile, index) => {
    const userId = userProfile.userId;
    return (

      <div key={index}>
        {userProfile.userId ? <img src ={`http://localhost:8080/api/v1/user-service/${userId}/image/download`} /> : null}
        <br />
        <h1>{userProfile.username}</h1>
        <Dropzone {...userProfile}/>
        <br />
      </div>
    )
  })
}

function Dropzone({userId}) {
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]
    console.log(file);
    const formData = new FormData()
    formData.append("file", file);
    axios.post(`http://localhost:8080/api/v1/user-service/${userId}/image/upload`, formData,
      {
        headers: {
          "Content-Type":"multipart/form-data",
          "Allow-Control-Allow-Origin":"*"
        }
      }
    ).then(() => {
      console.log("file upload successful");
    }).catch(err => {
      console.log(err);
    })
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop img here ...</p> :
          <p>Drag 'n' drop profile img, or click to select files</p>
      }
    </div>
  )
}

function App() {
  return (
    <>
    <UserProfiles />
    </>
  );
}

export default App;
