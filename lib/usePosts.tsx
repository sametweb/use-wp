import { useContext, useReducer } from "react";
import Axios from "axios";

import { Fetch, Post, PostRequestParams, Reducer, Hook } from "./dataTypes";
import { WPContext } from "./useWp";

type ActionType = "GET_POSTS_START" | "GET_POSTS_SUCCESS" | "GET_POSTS_ERROR";

const __initialState = {
  data: [],
  count: 0,
  loading: false,
  error: "",
};

const reducer: Reducer<Post[], ActionType> = (state = __initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_POSTS_START":
      return { ...state, loading: true, error: "" };
    case "GET_POSTS_SUCCESS":
      return { ...state, loading: false, data: payload.data, count: payload.count };
    case "GET_POSTS_ERROR":
      return { ...state, loading: false, error: "Error fetching posts" };
    default:
      return state;
  }
};

const usePosts: Hook<Post[], PostRequestParams> = () => {
  const wp = useContext(WPContext);
  console.log("usePosts", wp);

  const [posts, dispatch] = useReducer(reducer, __initialState);

  const fetchPosts: Fetch<PostRequestParams> = (params) => {
    dispatch({ type: "GET_POSTS_START" });

    Axios.get<Post[]>(wp.urlWithPath + "/posts", { params })
      .then((posts) => {
        dispatch({
          type: "GET_POSTS_SUCCESS",
          payload: { data: posts.data, count: Number(posts.headers["x-wp-total"]) },
        });
      })
      .catch(() => {
        dispatch({ type: "GET_POSTS_ERROR" });
      });
  };

  return [posts, fetchPosts];
};

export default usePosts;
