import { useEffect, useReducer } from "react";
import Axios, { AxiosResponse } from "axios";
import { postsReducer, DEFAULT_POSTS } from "./postsReducer";
import { DEFAULT_PAGES, pagesReducer } from "./pagesReducer";
import { commentsReducer, DEFAULT_COMMENTS } from "./commentsReducer";
import {
  DEFAULT_POST_COMMENTS,
  postCommentsReducer,
} from "./postCommentsReducer";

export function usePosts(url: string) {
  const [state, dispatch] = useReducer(postsReducer, DEFAULT_POSTS);

  const fetchPosts = Axios.get(url + "/posts");

  useEffect(() => {
    dispatch({ type: "GET_POSTS_START" });
    fetchPosts
      .then((response: AxiosResponse<any>) => {
        dispatch({ type: "GET_POSTS_SUCCESS", payload: response.data });
      })
      .catch(() => {
        dispatch({ type: "GET_POSTS_ERROR" });
      });
  }, []);

  return [state.data, state.loading, state.error];
}

export function usePages(url: string) {
  const [state, dispatch] = useReducer(pagesReducer, DEFAULT_PAGES);

  const fetchPages = Axios.get(url + "/pages");

  useEffect(() => {
    dispatch({ type: "GET_PAGES_START" });
    fetchPages
      .then((response: AxiosResponse<any>) => {
        dispatch({ type: "GET_PAGES_SUCCESS", payload: response.data });
      })
      .catch(() => {
        dispatch({ type: "GET_PAGES_ERROR" });
      });
  }, []);

  return [state.data, state.loading, state.error];
}

export function useComments(url: string) {
  const [state, dispatch] = useReducer(commentsReducer, DEFAULT_COMMENTS);

  const fetchComments = Axios.get(url + "/comments");

  useEffect(() => {
    dispatch({ type: "GET_COMMENTS_START" });
    fetchComments
      .then((response: AxiosResponse<any>) => {
        dispatch({ type: "GET_COMMENTS_SUCCESS", payload: response.data });
      })
      .catch(() => {
        dispatch({ type: "GET_COMMENTS_ERROR" });
      });
  }, []);

  return [state.data, state.loading, state.error];
}

export const usePostComments = (url: string, post_id: number) => {
  const [state, dispatch] = useReducer(
    postCommentsReducer,
    DEFAULT_POST_COMMENTS
  );

  const fetchPostComments = Axios.get(url + "/comments?post=" + post_id);

  useEffect(() => {
    dispatch({ type: "GET_POST_COMMENTS_START" });

    fetchPostComments
      .then((response: AxiosResponse<any>) => {
        dispatch({ type: "GET_POST_COMMENTS_SUCCESS", payload: response.data });
      })
      .catch(() => {
        dispatch({ type: "GET_POST_COMMENTS_ERROR" });
      });
  }, []);

  return [state.data, state.loading, state.error];
};
