import Axios, { AxiosResponse } from "axios";
import { useEffect, useReducer } from "react";
import actionTypes from "./actionTypes";
import { DEFAULT_STATE } from "./context";
import reducer from "./reducer";

export interface IPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: "post" | "page";
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  tags: Array<string>;
}

export interface IPage {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: "post" | "page";
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
}

export interface IComment {
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

export function useWp(url: string) {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  useEffect(() => {
    const postsRequest = Axios.get(url + "/posts");
    const pagesRequest = Axios.get(url + "/pages");
    const commentsRequest = Axios.get(url + "/comments");

    Axios.all([postsRequest, pagesRequest, commentsRequest])

      .then((response: AxiosResponse<any>[]) => {
        const [
          { data: allPosts },
          { data: allPages },
          { data: allComments },
        ] = response;

        dispatch({
          type: actionTypes.GET_ALL_SUCCESS,
          payload: { allPosts, allPages, allComments },
        });
      })
      .catch(() => {
        dispatch({
          type: actionTypes.GET_POSTS_ERROR,
          payload: "Error fetching posts.",
        });
      });
  }, [url]);

  const getPosts = () => {
    return state.allPosts.data.map((post) => {
      return {
        id: post.id,
        date: post.date,
        modified: post.modified,
        slug: post.slug,
        status: post.status,
        title: post.title.rendered,
        excerpt: post.excerpt.rendered,
        content: post.content.rendered,
        tags: post.tags,
      };
    });
  };

  const getPages = () => {
    return state.allPages.data.map((page) => {
      return {
        id: page.id,
        date: page.date,
        modified: page.modified,
        slug: page.slug,
        status: page.status,
        title: page.title.rendered,
        excerpt: page.excerpt.rendered,
        content: page.content.rendered,
      };
    });
  };

  const getComments = () => {
    return state.allComments.data.map((comment) => {
      return {
        id: comment.id,
        date: comment.date,
        author_name: comment.author_name,
        content: comment.content.rendered,
        avatar: comment.author_avatar_urls["48"],
      };
    });
  };

  const getPostComments = (id: number) => {
    const postCommentsURL = url + "/comments?post=" + id;
    Axios.get<AxiosResponse<any>>(postCommentsURL).then(({ data }) => {});
  };

  return { getPosts, getPages, getComments, getPostComments };
}
