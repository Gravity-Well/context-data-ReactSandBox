
import React, { useContext, useEffect } from "react"

import postsContext from "../context/PostsContext"

const Posts = () => {
  const PostsContext = useContext(postsContext);

  useEffect(() => {
    PostsContext.getPosts()
   
  }, []);

  return (
    <>
   
  
   <div className="card">
   <div className="card-header">
  <h1>Avaliable Posts</h1> 
  </div>
      <div className="list-group h-100" >
    
        {PostsContext.posts.length
          ? PostsContext.posts.map((post) => (
            <a key={post.id}            
             
            href="#!"
            onClick={() => PostsContext.getPost(post.id)}
            className="list-group-item-info list-group-item text-truncate"
              > 
              {post.id} - {post.title}
            </a>
                 
            ))
          : null}
      </div>
      </div>
    </>
  )
}

export default Posts;