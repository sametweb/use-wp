import { useCallback, useContext, useReducer } from "react";
import Axios from "axios";

import { Page, Reducer, Hook, State, FetchWithRequiredIdentifier } from "./types";
import { WPContext } from ".";

type ActionType = "GET_PAGE_START" | "GET_PAGE_SUCCESS" | "GET_PAGE_ERROR";

const __initialState = {
  data: {},
  loading: true,
  error: "",
};

const reducer: Reducer<Page, ActionType> = (state = __initialState as State<Page>, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_PAGE_START":
      return { ...state, loading: true, error: "" };
    case "GET_PAGE_SUCCESS":
      return { ...state, loading: false, data: payload };
    case "GET_PAGE_ERROR":
      return { ...state, loading: false, error: "Error fetching Pages" };
    default:
      return state;
  }
};

const usePage: Hook<State<Page>, FetchWithRequiredIdentifier> = () => {
  const wp = useContext(WPContext);

  const [page, dispatch] = useReducer(reducer, __initialState as State<Page>);

  const fetchPage: FetchWithRequiredIdentifier = useCallback(
    (slug) => {
      dispatch({ type: "GET_PAGE_START" });

      Axios.get<Page[]>(wp.urlWithPath + "/pages?slug=" + slug)
        .then((page) => {
          dispatch({ type: "GET_PAGE_SUCCESS", payload: page.data[0] });
        })
        .catch(() => {
          dispatch({ type: "GET_PAGE_ERROR" });
        });
    },
    [wp.urlWithPath]
  );

  return [page, fetchPage];
};

export default usePage;
