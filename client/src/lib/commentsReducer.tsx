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
