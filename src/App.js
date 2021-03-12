import React from "react"

import Posts from "./components/Posts"
import Post from "./components/Post"

import PostsState from "./context/PostsState"

import "bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <PostsState>
      <div className="d-flex flex-row justify-content-start h-100">
       <Posts/> 
       <Post/>
      </div>
    </PostsState>
  );
}

export default App;