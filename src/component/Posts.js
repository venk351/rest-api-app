import React, { useState, useEffect } from "react";
import { getPosts, deletePosts, createPosts } from "../services/apiservice";
import PostForm from "./PostForm";

export default function Posts() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    getPosts()
      .then((result) => setPost(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id)=>{
    deletePosts(id).then((result)=> {
        setPost(posts.filter((post)=> post.id!==id))
    })
  }
  return (
    <div>
      <h1>Posts</h1>
      <PostForm post={posts} setPost={setPost}></PostForm>
      <ul>
        {posts.map(post=>(
            <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <button onClick={()=>handleDelete(post.id)}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  );
}
