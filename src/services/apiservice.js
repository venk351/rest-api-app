import axios from 'axios';

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

const getPosts = ()=> api.get("/posts");
const deletePosts = (id)=>api.delete(`/posts/${id}`)
const createPosts = (data) => api.post("/posts",data)

export {getPosts, deletePosts, createPosts};