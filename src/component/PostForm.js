import React from "react";
import {useState} from "react";
import { createPosts } from "../services/apiservice";


export default function PostForm({post, setPost}){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        setTitle("")
        setBody("")
    }

    return(
        <form style={{"textAlign":"center"}}>
            <div>Title</div>
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
            <div>Body</div>
            <textarea value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
            <div><button type="submit" onSubmit={handleSubmit}>Add Post</button></div>
        </form>
    )
}
