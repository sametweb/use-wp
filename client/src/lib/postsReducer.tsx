import { IAction, IData, IPost } from "./types";

type PostsActionTypes =
  | "GET_POSTS_START"
  | "GET_POSTS_SUCCESS"
  | "GET_POSTS_ERROR";

export const DEFAULT_POSTS: IData<IPost> = {
  data: [],
  loading: false,
  error: "",
};

export const postsReducer = (
  state: IData<IPost> = DEFAULT_POSTS,
  action: IAction<PostsActionTypes>
): IData<IPost> => {
  switch (action.type) {
    case "GET_POSTS_START":
      return { ...state, loading: true, error: "" };
    case "GET_POSTS_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_POSTS_ERROR":
      return { ...state, loading: false, error: "Error fetching posts" };
    default:
      return state;
  }
};
