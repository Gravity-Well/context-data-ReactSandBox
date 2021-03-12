
import React, { useContext, useEffect } from "react"

import postsContext from "../context/PostsContext"

const Posts = () => {
  const PostsContext = useContext(postsContext);

  useEffect(() => {
    PostsContext.getPosts()
   
  }, []);

  return (
    <>
   
  
   
      <div className="list-group h-100" >
      <h1>Avaliable Posts</h1>
        {PostsContext.posts.length
          ? PostsContext.posts.map((post) => (
            <a key={post.id}            
             
            href="#!"
            onClick={() => PostsContext.getPost(post.id)}
            className="list-group-item list-group-item-action text-truncate"
              > 
              {post.id} - {post.title}
            </a>
                 
            ))
          : null}
      </div>
    </>
  )
}

export default Posts;