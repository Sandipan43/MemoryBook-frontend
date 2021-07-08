import * as api from "../../api/index";
import * as actionTypes from "../actionTypes";

export const getPosts=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchPosts();
        //console.log(data);
        dispatch({
            type:actionTypes.FETCH_POSTS,
            posts:data
        });
    } catch (error) {
        console.log(error);
    }
};

export const createPost=(post)=>async(dispatch)=>{
    try {
        const {data}= await api.createPost(post);
        //console.log(data);
        dispatch({
            type:actionTypes.CREATE_POST,
            posts:data
        })
    } catch (error) {
        console.log(error);
    }
}

export const updatePost=(id,post)=>async(dispatch)=>{
    try {
       const {data}= await api.updatePost(id,post);
       dispatch({
           type:actionTypes.UPDATE,
           post:data
       })
    } catch (error) {
        console.log(error);
    }
}

export const deletePost=(id)=>async(dispatch)=>{
    try {
       await api.deletePost(id);
       dispatch({
           type:actionTypes.DELETE,
           payload:id           
       })
    } catch (error) {
        console.log(error);
    }
}

export const likePost=(id)=>async(dispatch)=>{
    try {
        const {data}= await api.likePost(id);
        dispatch({
            type:actionTypes.LIKE,
            post:data
        })
    } catch (error) {
        console.log(error);
    }
}

