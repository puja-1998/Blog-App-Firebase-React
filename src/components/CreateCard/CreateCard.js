import React, { useContext, useRef } from 'react';
import './CreateCard.css';
import { UserContext } from '../../App';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../../config/Firebase';


export default function CreateCard() {

  const blogTitleRef = useRef(null);
  const blogContentRef = useRef(null);
  const {user} = useContext(UserContext);
//addDoc, getDoc, updateDoc, deleteDoc this are CRUD operations
  const blogsCollections = collection(firestore, "blogsCollections");

 const handleSubmit = async(e)=> {
    e.preventDefault();
    const newBlog={
      title: blogTitleRef.current.value,
      content: blogContentRef.current.value,
      createdBy: user.displayName || JSON.parse(localStorage.getItem("userDetails"))?.displayName,
    };
    
    try{
      await addDoc(blogsCollections, newBlog)
      alert("Blog Created Successfully..!")
    }catch(err){
      console.log("Error while adding the blog", err);
      
    }
  };

  return (
    <div className='create-card'>
      <h1>Create Blog</h1>
    <form  className='form-container' onSubmit={handleSubmit}>
      <input ref={blogTitleRef} type="text" placeholder="Enter Title"/>
      <textarea ref={blogContentRef} rows="5" cols="40" placeholder="Type Your Content Here..." style={{padding:"10px"}}/>
      <button className="btn">Create Blog</button>
    </form>
    </div>
  )
}
