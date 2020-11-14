import { IAction, IData } from "./types";

interface IComment {
  id: number;
  date: string;
  author_name: string;
  content: { rendered: string };
  author_avatar_urls: {
    "24": string;
    "48": string;
    "96": string;
  };
}

type CommentsActionTypes =
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
  action: IAction<CommentsActionTypes>
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
