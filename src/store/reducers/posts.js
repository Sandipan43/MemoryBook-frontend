 import * as actionTypes from "../actionTypes";
 const reducer= (state=[],action)=>{
    switch(action.type){
        case actionTypes.FETCH_POSTS:
            return action.posts;
        case actionTypes.CREATE_POST:
            return [...state,action.posts];
        case actionTypes.UPDATE:
        case actionTypes.LIKE:
            return state.map(post=>post._id===action.post._id?action.post:post);
        case actionTypes.DELETE:
            return state.filter(post=>post._id!==action.payload);
        default:return state;
    }
};

export default reducer;