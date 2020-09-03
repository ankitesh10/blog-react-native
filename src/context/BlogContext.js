import createDataContext from "./createDataContext";

const BlogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOGPOST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          name: `blog #${state.length + 1}`,
        },
      ];
    case "DELETE_BLOGPOST":
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "ADD_BLOGPOST" });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "DELETE_BLOGPOST", payload: id });
  };
};

export const { Provider, Context } = createDataContext(
  BlogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
