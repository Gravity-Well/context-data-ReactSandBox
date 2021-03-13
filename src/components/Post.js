import React, { useContext } from "react";


import postsContext from "../context/PostsContext"

const Post = () => {
  const PostsContext = useContext(postsContext);

    
  console.log(PostsContext.post?.title);

  const { post } = PostsContext;
  return (
    <>
      <div className="card" style={{marginLeft:20,marginRight:20,width: 800}}>
        {post ? (
          <div>
            <div className="card-header">
               <h1>Post Details</h1>
            </div>
            <div className="card-body">
                  
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
          </div>
          </div>
        ):null}
      </div>
    </>
  )
}

export default Post