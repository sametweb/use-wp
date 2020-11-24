import { useEffect, useReducer, useState } from "react";
import Axios, { AxiosResponse } from "axios";

import { ICategory, IComment, IMedia, IPage, IPost, IPostQueryParams, ITag } from "./types";

import { postsReducer, DEFAULT_POSTS } from "./postsReducer";
import { pagesReducer, DEFAULT_PAGES } from "./pagesReducer";
import { commentsReducer, DEFAULT_COMMENTS } from "./commentsReducer";
import { postCommentsReducer, DEFAULT_POST_COMMENTS } from "./postCommentsReducer";
import { categoriesReducer, DEFAULT_CATEGORIES } from "./categoriesReducer";
import { postTagsReducer, DEFAULT_POST_TAGS } from "./postTagsReducer";
import { categoryPostsReducer, DEFAULT_CATEGORY_POSTS } from "./categoryPostsReducer";
import { postMediaReducer, DEFAULT_POST_MEDIA } from "./postMediaReducer";

type DataReturnType<T> = [{ data: T; total: number }, boolean, string];

interface IUseWp {
  (url: string): {
    usePosts: (params?: IPostQueryParams) => DataReturnType<IPost[]>;
    usePages: () => DataReturnType<IPage[]>;
    useComments: () => DataReturnType<IComment[]>;
    usePostComments: (post_id: number) => DataReturnType<IComment[]>;
    usePostTags: (post_id: number) => DataReturnType<ITag[]>;
    useCategories: () => DataReturnType<ICategory[]>;
    useCategoryPosts: (cat_id: number) => DataReturnType<IPost[]>;
    usePostMedia: (media_id: number) => DataReturnType<IMedia>;
  };
}

const useWp: IUseWp = (url: string) => {
  const apiUrl = url + "/wp-json/wp/v2";

  function usePosts(params: IPostQueryParams = {}): DataReturnType<IPost[]> {
    const [state, dispatch] = useReducer(postsReducer, DEFAULT_POSTS);
    const [total, setTotal] = useState(0);

    useEffect(() => {
      const source = Axios.CancelToken.source();

      const fetchPosts = Axios.get(apiUrl + "/posts", { params, cancelToken: source.token });
      dispatch({ type: "GET_POSTS_START" });

      fetchPosts
        .then((response: AxiosResponse<any>) => {
          setTotal(Number(response.headers["x-wp-total"]));
          dispatch({ type: "GET_POSTS_SUCCESS", payload: response.data });
        })
        .catch(() => {
          dispatch({ type: "GET_POSTS_ERROR" });
        });

      return () => {
        source.cancel();
      };
    }, [params]);

    return [{ data: state.data as IPost[], total }, state.loading, state.error];
  }

  function usePages(): [IPage[], boolean, string] {
    const [state, dispatch] = useReducer(pagesReducer, DEFAULT_PAGES);

    useEffect(() => {
      const fetchPages = Axios.get(apiUrl + "/pages");
      dispatch({ type: "GET_PAGES_START" });
      fetchPages
        .then((response: AxiosResponse<any>) => {
          dispatch({ type: "GET_PAGES_SUCCESS", payload: response.data });
        })
        .catch(() => {
          dispatch({ type: "GET_PAGES_ERROR" });
        });
    }, []);

    return [state.data as IPage[], state.loading, state.error];
  }

  function useComments(): [IComment[], boolean, string] {
    const [state, dispatch] = useReducer(commentsReducer, DEFAULT_COMMENTS);

    useEffect(() => {
      const fetchComments = Axios.get(apiUrl + "/comments");
      dispatch({ type: "GET_COMMENTS_START" });
      fetchComments
        .then((response: AxiosResponse<any>) => {
          dispatch({ type: "GET_COMMENTS_SUCCESS", payload: response.data });
        })
        .catch(() => {
          dispatch({ type: "GET_COMMENTS_ERROR" });
        });
    }, []);

    return [state.data as IComment[], state.loading, state.error];
  }

  const usePostComments = (post_id: number): [IComment[], boolean, string] => {
    const [state, dispatch] = useReducer(postCommentsReducer, DEFAULT_POST_COMMENTS);

    useEffect(() => {
      const fetchPostComments = Axios.get(apiUrl + "/comments?post=" + post_id);
      dispatch({ type: "GET_POST_COMMENTS_START" });

      fetchPostComments
        .then((response: AxiosResponse<any>) => {
          dispatch({ type: "GET_POST_COMMENTS_SUCCESS", payload: response.data });
        })
        .catch(() => {
          dispatch({ type: "GET_POST_COMMENTS_ERROR" });
        });
    }, [post_id]);

    return [state.data as IComment[], state.loading, state.error];
  };

  const usePostMedia = (media_id: number): [IMedia, boolean, string] => {
    const [state, dispatch] = useReducer(postMediaReducer, DEFAULT_POST_MEDIA);

    useEffect(() => {
      const fetchPostMedia = Axios.get(apiUrl + "/media/" + media_id);
      dispatch({ type: "GET_POST_MEDIA_START" });

      fetchPostMedia
        .then((response: AxiosResponse<any>) => {
          response.data.url = url + "/wp-content/uploads/" + response.data.media_details.file;

          dispatch({ type: "GET_POST_MEDIA_SUCCESS", payload: response.data });
        })
        .catch(() => {
          dispatch({ type: "GET_POST_MEDIA_ERROR" });
        });
    }, [media_id]);

    return [state.data as IMedia, state.loading, state.error];
  };

  const usePostTags = (post_id: number): [ITag[], boolean, string] => {
    const [state, dispatch] = useReducer(postTagsReducer, DEFAULT_POST_TAGS);

    useEffect(() => {
      const fetchPostTags = Axios.get(apiUrl + "/tags?post=" + post_id);
      dispatch({ type: "GET_POST_TAGS_START" });

      fetchPostTags
        .then((response: AxiosResponse<any>) => {
          dispatch({ type: "GET_POST_TAGS_SUCCESS", payload: response.data });
        })
        .catch(() => {
          dispatch({ type: "GET_POST_TAGS_ERROR" });
        });
    }, [post_id]);

    return [state.data as ITag[], state.loading, state.error];
  };

  function useCategories(): [ICategory[], boolean, string] {
    const [state, dispatch] = useReducer(categoriesReducer, DEFAULT_CATEGORIES);

    useEffect(() => {
      const fetchCategories = Axios.get(apiUrl + "/categories");
      dispatch({ type: "GET_CATEGORIES_START" });
      fetchCategories
        .then((response: AxiosResponse<any>) => {
          dispatch({ type: "GET_CATEGORIES_SUCCESS", payload: response.data });
        })
        .catch(() => {
          dispatch({ type: "GET_CATEGORIES_ERROR" });
        });
    }, []);

    return [state.data as ICategory[], state.loading, state.error];
  }

  function useCategoryPosts(cat_id: number): [IPost[], boolean, string] {
    const [state, dispatch] = useReducer(categoryPostsReducer, DEFAULT_CATEGORY_POSTS);

    useEffect(() => {
      const fetchCategoryPosts = Axios.get(apiUrl + "/posts?categories=" + cat_id);
      dispatch({ type: "GET_CATEGORY_POSTS_START" });
      fetchCategoryPosts
        .then((response: AxiosResponse<any>) => {
          dispatch({ type: "GET_CATEGORY_POSTS_SUCCESS", payload: response.data });
        })
        .catch(() => {
          dispatch({ type: "GET_CATEGORY_POSTS_ERROR" });
        });
    }, [cat_id]);

    return [state.data as IPost[], state.loading, state.error];
  }

  return {
    usePosts,
    usePages,
    useComments,
    usePostComments,
    usePostTags,
    useCategories,
    useCategoryPosts,
    usePostMedia,
  };
};

export default useWp;
