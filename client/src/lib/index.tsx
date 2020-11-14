import { useEffect, useReducer, useState } from "react";
import Axios, { AxiosResponse } from "axios";
import { postsReducer, DEFAULT_POSTS } from "./postsReducer";
import { DEFAULT_PAGES, pagesReducer } from "./pagesReducer";
import { commentsReducer, DEFAULT_COMMENTS } from "./commentsReducer";

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
