import { IAction, IData, IMedia } from "./types";

type PostMediaActionTypes =
  | "GET_POST_MEDIA_START"
  | "GET_POST_MEDIA_SUCCESS"
  | "GET_POST_MEDIA_ERROR";

export const DEFAULT_POST_MEDIA: IData<IMedia> = {
  data: {} as IMedia,
  loading: false,
  error: "",
};

export const postMediaReducer = (
  state: IData<IMedia> = DEFAULT_POST_MEDIA,
  action: IAction<PostMediaActionTypes>
): IData<IMedia> => {
  switch (action.type) {
    case "GET_POST_MEDIA_START":
      return { ...state, loading: true, error: "" };
    case "GET_POST_MEDIA_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_POST_MEDIA_ERROR":
      return { ...state, loading: false, error: "Error fetching media" };
    default:
      return state;
  }
};
