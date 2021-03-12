import React, { useReducer } from "react"
import axios from "axios"

import PostsContext from "./PostsContext"
import PostsReducer from "./PostsReducer"
import { GET_POSTS, GET_POST } from "../types/types"

const PostsState = (props) => {
  let initialState = {
    posts: [],
    post: null,
  }

  const [state, dispatch] = useReducer(PostsReducer, initialState);

  const getPosts = async () => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      
      let { data } = res

      dispatch({ type: GET_POSTS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const getPost = async (id) => {
    try {
        console.log(id)
      let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      let { data } = res
      console.log(data)

      dispatch({ type: GET_POST, payload: data });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        post: state.post,
        getPosts,
        getPost,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsState