import { IAction, IData, IComment } from "./types";

type CommentsActionTypes =
  | "GET_COMMENTS_START"
  | "GET_COMMENTS_SUCCESS"
  | "GET_COMMENTS_ERROR";

export const DEFAULT_COMMENTS: IData<IComment> = {
  data: [],
  loading: false,
  error: "",
};

export const commentsReducer = (
  state: IData<IComment> = DEFAULT_COMMENTS,
  action: IAction<CommentsActionTypes>
): IData<IComment> => {
  switch (action.type) {
    case "GET_COMMENTS_START":
      return { ...state, loading: true, error: "" };
    case "GET_COMMENTS_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_COMMENTS_ERROR":
      return { ...state, loading: false, error: "Error fetching comments" };
    default:
      return state;
  }
};
