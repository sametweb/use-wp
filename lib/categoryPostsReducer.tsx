import { IAction, IData, IPost } from "./types";

type CategoryPostsActionTypes =
  | "GET_CATEGORY_POSTS_START"
  | "GET_CATEGORY_POSTS_SUCCESS"
  | "GET_CATEGORY_POSTS_ERROR";

export const DEFAULT_CATEGORY_POSTS: IData<IPost> = {
  data: [],
  loading: false,
  error: "",
};

export const categoryPostsReducer = (
  state: IData<IPost> = DEFAULT_CATEGORY_POSTS,
  action: IAction<CategoryPostsActionTypes>
): IData<IPost> => {
  switch (action.type) {
    case "GET_CATEGORY_POSTS_START":
      return { ...state, loading: true, error: "" };
    case "GET_CATEGORY_POSTS_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_CATEGORY_POSTS_ERROR":
      return { ...state, loading: false, error: "Error fetching category posts" };
    default:
      return state;
  }
};
