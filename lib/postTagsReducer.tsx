import { IAction, IData, ITag } from "./types";

type PostTagsActionTypes =
  | "GET_POST_TAGS_START"
  | "GET_POST_TAGS_SUCCESS"
  | "GET_POST_TAGS_ERROR";

export const DEFAULT_POST_TAGS: IData<ITag> = {
  data: [],
  loading: false,
  error: "",
};

export const postTagsReducer = (
  state: IData<ITag> = DEFAULT_POST_TAGS,
  action: IAction<PostTagsActionTypes>
): IData<ITag> => {
  switch (action.type) {
    case "GET_POST_TAGS_START":
      return { ...state, loading: true, error: "" };
    case "GET_POST_TAGS_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_POST_TAGS_ERROR":
      return { ...state, loading: false, error: "Error fetching tags" };
    default:
      return state;
  }
};
