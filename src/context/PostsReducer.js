import { GET_POSTS, GET_POST } from "../types/types"


export default (state, action) => {
  const { payload, type } = action


  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case GET_POST:
      return {
       
        ...state,
        post: payload,
      };
    default:
      return state
  }
}