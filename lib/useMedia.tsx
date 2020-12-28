import { useCallback, useContext, useEffect, useReducer, useRef } from "react";
import Axios, { CancelTokenSource } from "axios";

import { FetchWithRequiredIdentifier, Media, Reducer, Hook, State } from "./types";
import { WPContext } from ".";

type ActionType = "GET_MEDIA_START" | "GET_MEDIA_SUCCESS" | "GET_MEDIA_ERROR";

const __initialState = {
  data: {},
  loading: true,
  error: "",
};

const reducer: Reducer<Media, ActionType> = (state = __initialState as State<Media>, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_MEDIA_START":
      return { ...state, loading: true, error: "" };
    case "GET_MEDIA_SUCCESS":
      return { ...state, loading: false, data: payload };
    case "GET_MEDIA_ERROR":
      return { ...state, loading: false, error: "Error fetching media" };
    default:
      return state;
  }
};

export type UseMedia = () => [State<Media>, FetchWithRequiredIdentifier];

export const useMedia: UseMedia = () => {
  const wp = useContext(WPContext);
  const [media, dispatch] = useReducer(reducer, __initialState as State<Media>);

  const source = useRef<CancelTokenSource | null>(null);

  function getSource() {
    if (source.current === null) {
      source.current = Axios.CancelToken.source();
    }
    return source.current;
  }

  const fetchMedia: FetchWithRequiredIdentifier = useCallback(
    (id) => {
      dispatch({ type: "GET_MEDIA_START" });

      Axios.get<Media>(wp.urlWithPath + "/media/" + id, { cancelToken: getSource().token })
        .then((media) => {
          dispatch({ type: "GET_MEDIA_SUCCESS", payload: media.data });
        })
        .catch((error) => {
          if (Axios.isCancel(error)) {
            console.log(error);
          } else {
            dispatch({ type: "GET_MEDIA_ERROR" });
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

  return [media, fetchMedia];
};
