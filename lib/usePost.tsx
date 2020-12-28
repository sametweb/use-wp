import { useCallback, useContext, useEffect, useReducer, useRef } from "react";
import Axios, { CancelTokenSource } from "axios";

import { FetchWithRequiredIdentifier, Post, Reducer, State } from "./types";
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

export type UsePost = () => [State<Post>, FetchWithRequiredIdentifier];

export const usePost: UsePost = () => {
  const wp = useContext(WPContext);
  const [post, dispatch] = useReducer(reducer, __initialState as State<Post>);

  const source = useRef<CancelTokenSource | null>(null);

  function getSource() {
    if (source.current === null) {
      source.current = Axios.CancelToken.source();
    }
    return source.current;
  }

  const fetchPost: FetchWithRequiredIdentifier = useCallback(
    (slug) => {
      dispatch({ type: "GET_POST_START" });
      const url = `${wp.urlWithPath}/posts?slug=${slug}&_embed=true`;
      Axios.get<Post[]>(url, {
        cancelToken: getSource().token,
      })
        .then((post) => {
          dispatch({ type: "GET_POST_SUCCESS", payload: post.data[0] });
        })
        .catch((error) => {
          if (Axios.isCancel(error)) {
            console.log(error);
          } else {
            dispatch({ type: "GET_POST_ERROR" });
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

  return [post, fetchPost];
};
