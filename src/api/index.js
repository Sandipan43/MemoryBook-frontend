import axios from "axios";
const url="http://localhost:5000/posts";
const config={
    headers:{
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
    withCredentials:true
}
export const fetchPosts=()=>axios.get(url,config);
export const createPost=(newPost)=>axios.post(url,newPost,config);
export const updatePost=(id,updatedPost)=>axios.patch(`${url}/${id}`,updatedPost,config);
export const deletePost=(id)=>axios.delete(`${url}/${id}`,config);
export const likePost=(id)=>axios.patch(`${url}/${id}/likePost`,null,config);
