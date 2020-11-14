import { WPContext } from "./context";
import { IAction } from "./actionTypes";

export default (state: WPContext, action: IAction): WPContext => {
  switch (action.type) {
    case "GET_ALL_START":
      return {
        ...state,
        allPosts: { ...state.allPosts, loading: true, error: "" },
        allPages: { ...state.allPages, loading: true, error: "" },
        allComments: { ...state.allComments, loading: true, error: "" },
      };
    case "GET_ALL_SUCCESS":
      return {
        ...state,
        allPosts: {
          ...state.allPosts,
          data: action.payload.allPosts,
          loading: false,
        },
        allPages: {
          ...state.allPages,
          data: action.payload.allPages,
          loading: false,
        },
        allComments: {
          ...state.allComments,
          data: action.payload.allComments,
          loading: false,
        },
      };
    case "GET_ALL_ERROR":
      return {
        ...state,
        allPosts: {
          ...state.allPosts,
          loading: false,
          error: "Error fetching posts",
        },
        allPages: {
          ...state.allPages,
          loading: false,
          error: "Error fetching pages",
        },
        allComments: {
          ...state.allComments,
          loading: false,
          error: "Error fetching comments",
        },
      };
    case "GET_POST_COMMENTS_START":
      return {
        ...state,
        currentPostComments: action.payload,
      };
    default:
      return state;
  }
};
