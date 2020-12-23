import { useCallback, useContext, useReducer } from "react";
import Axios from "axios";

import { FetchItem, Post, Reducer, Hook, State } from "./types";
import { WPContext } from ".";

type ActionType = "GET_POST_START" | "GET_POST_SUCCESS" | "GET_POST_ERROR";

const __initialState = {
  data: {},
  loading: true,
  error: "",
};

const reducer: Reducer<Post, ActionType> = (state = __initialState as State<Post>, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_POST_START":
      return { ...state, loading: true, error: "" };
    case "GET_POST_SUCCESS":
      return { ...state, loading: false, data: payload };
    case "GET_POST_ERROR":
      return { ...state, loading: false, error: "Error fetching posts" };
    default:
      return state;
  }
};

const usePost: Hook<State<Post>, FetchItem> = () => {
  const wp = useContext(WPContext);
  const [post, dispatch] = useReducer(reducer, __initialState as State<Post>);

  const fetchPost: FetchItem = useCallback(
    (slug) => {
      dispatch({ type: "GET_POST_START" });

      Axios.get<Post[]>(wp.urlWithPath + "/posts?slug=" + slug)
        .then((post) => {
          dispatch({ type: "GET_POST_SUCCESS", payload: post.data[0] });
        })
        .catch(() => {
          dispatch({ type: "GET_POST_ERROR" });
        });
    },
    [wp.urlWithPath]
  );

  return [post, fetchPost];
};

export default usePost;
