import { createContext } from "react";
import { IComment, IPage, IPost } from "./index";

export interface WPContext {
  allPosts: IFetchedStateData<IPost>;
  allPages: IFetchedStateData<IPage>;
  allComments: IFetchedStateData<IComment>;
  currentPostComments: IFetchedStateData<IComment>;
}

interface IFetchedStateData<T> {
  data: Array<T>;
  loading: boolean;
  error: string;
}

export const DEFAULT_STATE = {
  allPosts: {
    data: [],
    loading: false,
    error: "",
  },
  allPages: {
    data: [],
    loading: false,
    error: "",
  },
  allComments: {
    data: [],
    loading: false,
    error: "",
  },
  currentPostComments: {
    data: [],
    loading: false,
    error: "",
  },
};

export default createContext<WPContext>(DEFAULT_STATE);
