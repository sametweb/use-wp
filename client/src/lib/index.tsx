import { useEffect, useReducer } from "react";
import Axios, { AxiosResponse } from "axios";
import rendered from "./utils/rendered";

import { IPost } from "./types";

import { postsReducer, DEFAULT_POSTS } from "./postsReducer";
import { pagesReducer, DEFAULT_PAGES } from "./pagesReducer";
import { commentsReducer, DEFAULT_COMMENTS } from "./commentsReducer";
import { postCommentsReducer, DEFAULT_POST_COMMENTS } from "./postCommentsReducer";
import { categoriesReducer, DEFAULT_CATEGORIES } from "./categoriesReducer";
import { DEFAULT_POST_TAGS, postTagsReducer } from "./postTagsReducer";
import { categoryPostsReducer, DEFAULT_CATEGORY_POSTS } from "./categoryPostsReducer";

export function usePosts(url: string): [IPost[], boolean, string] {
  const [state, dispatch] = useReducer(postsReducer, DEFAULT_POSTS);

  const fetchPosts = Axios.get(url + "/posts");

  useEffect(() => {
    dispatch({ type: "GET_POSTS_START" });
    fetchPosts
      .then((response: AxiosResponse<any>) => {
        response.data.forEach((post: IPost) => {
          post.title.rendered = rendered(post.title.rendered as string);
          post.content.rendered = rendered(post.content.rendered as string);
          post.excerpt.rendered = rendered(post.excerpt.rendered as string);
        });
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
  const [state, dispatch] = useReducer(postCommentsReducer, DEFAULT_POST_COMMENTS);

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

export const usePostTags = (url: string, post_id: number) => {
  const [state, dispatch] = useReducer(postTagsReducer, DEFAULT_POST_TAGS);

  const fetchPostTags = Axios.get(url + "/tags?post=" + post_id);

  useEffect(() => {
    dispatch({ type: "GET_POST_TAGS_START" });

    fetchPostTags
      .then((response: AxiosResponse<any>) => {
        dispatch({ type: "GET_POST_TAGS_SUCCESS", payload: response.data });
      })
      .catch(() => {
        dispatch({ type: "GET_POST_TAGS_ERROR" });
      });
  }, []);

  return [state.data, state.loading, state.error];
};

export function useCategories(url: string) {
  const [state, dispatch] = useReducer(categoriesReducer, DEFAULT_CATEGORIES);

  const fetchCategories = Axios.get(url + "/categories");

  useEffect(() => {
    dispatch({ type: "GET_CATEGORIES_START" });
    fetchCategories
      .then((response: AxiosResponse<any>) => {
        dispatch({ type: "GET_CATEGORIES_SUCCESS", payload: response.data });
      })
      .catch(() => {
        dispatch({ type: "GET_CATEGORIES_ERROR" });
      });
  }, []);

  return [state.data, state.loading, state.error];
}

export function useCategoryPosts(url: string, cat_id: number) {
  const [state, dispatch] = useReducer(categoryPostsReducer, DEFAULT_CATEGORY_POSTS);

  const fetchCategoryPosts = Axios.get(url + "/posts?categories=" + cat_id);

  useEffect(() => {
    dispatch({ type: "GET_CATEGORY_POSTS_START" });
    fetchCategoryPosts
      .then((response: AxiosResponse<any>) => {
        dispatch({ type: "GET_CATEGORY_POSTS_SUCCESS", payload: response.data });
      })
      .catch(() => {
        dispatch({ type: "GET_CATEGORY_POSTS_ERROR" });
      });
  }, []);

  return [state.data, state.loading, state.error];
}
