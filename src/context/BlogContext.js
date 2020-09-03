import createDataContext from "./createDataContext";

const BlogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOGPOST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          name: action.payload.name,
          content: action.payload.content,
        },
      ];
    case "DELETE_BLOGPOST":
      return state.filter((blog) => blog.id !== action.payload);
    case "EDIT_BLOGPOST":
      return state.map((blog) => {
        return blog.id === action.payload.id ? action.payload : blog;
      });
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (name, content, callback) => {
    dispatch({ type: "ADD_BLOGPOST", payload: { name, content } });
    if (callback) callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_BLOGPOST", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, name, content, callback) => {
    dispatch({ type: "EDIT_BLOGPOST", payload: { id, name, content } });
    if (callback) callback();
  };
};

export const { Provider, Context } = createDataContext(
  BlogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ name: "Blog", content: "description", id: 1 }]
);
