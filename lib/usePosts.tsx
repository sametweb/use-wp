import { useCallback, useContext, useEffect, useReducer, useRef } from "react";
import Axios, { CancelTokenSource } from "axios";

import { Post, PostRequestParams, Reducer, FetchWithParamsObject, State } from "./types";
import { WPContext } from ".";

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

export type UsePosts = () => [State<Post[]>, FetchWithParamsObject<PostRequestParams>];

export const usePosts: UsePosts = () => {
  const wp = useContext(WPContext);

  const [posts, dispatch] = useReducer(reducer, __initialState);

  const source = useRef<CancelTokenSource | null>(null);

  function getSource() {
    if (source.current === null) {
      source.current = Axios.CancelToken.source();
    }
    return source.current;
  }

  const fetchPosts: FetchWithParamsObject<PostRequestParams> = useCallback(
    (params?: PostRequestParams) => {
      dispatch({ type: "GET_POSTS_START" });

      Axios.get<Post[]>(wp.urlWithPath + "/posts?_embed=true", {
        cancelToken: getSource().token,
        params,
      })
        .then((posts) => {
          const payload = { data: posts.data, count: Number(posts.headers["x-wp-total"]) };
          dispatch({ type: "GET_POSTS_SUCCESS", payload });
        })
        .catch((error) => {
          if (Axios.isCancel(error)) {
            console.log(error);
          } else {
            dispatch({ type: "GET_POSTS_ERROR" });
          }
        });
    },
    [wp.urlWithPath]
  );

  useEffect(() => {
    return () => {
      source.current?.cancel("Network request cancelled.");
    };
  }, []);

  return [posts, fetchPosts];
};
