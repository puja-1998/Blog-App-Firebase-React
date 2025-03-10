import React, { useEffect, useState } from 'react';
import './BlogList.css';
import { collection,  getDocs } from 'firebase/firestore';
import { firestore } from '../../config/Firebase';
import BlogCard from "../BlogCard/BlogCard";
 

export default function BlogList() {
  //getDoc
  const blogsDocRef = collection(firestore, "blogsCollection");
  const [blogDoc, setBlogDoc] = useState([]);

  useEffect(()=>{
    async function fetchData() {
      try {
       let res = await getDocs(blogsDocRef);
       console.log(res.docs[0].data(), "res");
        setBlogDoc(res.docs)
      }catch(err){
        console.log("Error while fetching the data from the db", err);
        
      }
    }
    fetchData();
  },[]);
  return (
   <div className="blog-list">
   <h1>Blog List</h1>
    {blogDoc.length > 0 && blogDoc?.map((doc)=> <BlogCard key={doc.id} blog={doc}/>)}
   </div>
  )
}

