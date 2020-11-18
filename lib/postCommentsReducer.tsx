import { IAction, IData, IComment } from "./types";

type PostCommentsActionTypes =
  | "GET_POST_COMMENTS_START"
  | "GET_POST_COMMENTS_SUCCESS"
  | "GET_POST_COMMENTS_ERROR";

export const DEFAULT_POST_COMMENTS: IData<IComment> = {
  data: [],
  loading: false,
  error: "",
};

export const postCommentsReducer = (
  state: IData<IComment> = DEFAULT_POST_COMMENTS,
  action: IAction<PostCommentsActionTypes>
): IData<IComment> => {
  switch (action.type) {
    case "GET_POST_COMMENTS_START":
      return { ...state, loading: true, error: "" };
    case "GET_POST_COMMENTS_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_POST_COMMENTS_ERROR":
      return { ...state, loading: false, error: "Error fetching comments" };
    default:
      return state;
  }
};
