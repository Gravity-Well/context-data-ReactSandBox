import React, { useContext } from "react";

import postsContext from "../context/PostsContext"

const Post = () => {
  const PostsContext = useContext(postsContext);

    
  console.log(PostsContext.post?.title);

  const { post } = PostsContext;
  return (
    <>
      <div className="container">
        {post ? (
          <div>
            <h1 >  Title: {post.title}</h1>
           
             
            <h2>Post:</h2> 
            {post.body}
          
          </div>
        ) : (
          "Post"
        )}{" "}
      </div>
    </>
  )
}

export default Post