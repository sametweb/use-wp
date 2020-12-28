import React, { createContext, ReactNode } from "react";

export type {
  Post,
  PostRequestParams,
  EmbeddedPostProperties,
  Page,
  PageRequestParams,
  Category,
  CategoryRequestParams,
  Comment,
  CommentRequestParams,
  Tag,
  TagRequestParams,
  Media,
  MediaRequestParams,
  State,
  FetchWithRequiredIdentifier,
  FetchWithParamsObject,
  Action,
  Reducer,
  Hook,
} from "./types";

export { usePosts } from "./usePosts";
export type { UsePosts } from "./usePosts";
export { usePost } from "./usePost";
export type { UsePost } from "./usePost";
export { useMedia } from "./useMedia";
export type { UseMedia } from "./useMedia";

export type UseWP<T> = (url: string) => (props: T) => JSX.Element;

export const WPContext = createContext({ url: "", urlWithPath: "" });

interface ProviderProps {
  children: ReactNode;
}

const useWP: UseWP<ProviderProps> = (url) => {
  const value = {
    url,
    urlWithPath: url + "/wp-json/wp/v2",
  };

  const Provider = ({ children }: ProviderProps) => (
    <WPContext.Provider value={value}>{children}</WPContext.Provider>
  );

  return Provider;
};

export default useWP;
