import { useContext, useReducer } from "react";
import Axios from "axios";

import { FetchWithParamsObject, Page, PageRequestParams, Reducer, Hook, State } from "./types";
import { WPContext } from ".";

type ActionType = "GET_PAGES_START" | "GET_PAGES_SUCCESS" | "GET_PAGES_ERROR";

const __initialState = {
  data: [],
  count: 0,
  loading: false,
  error: "",
};

const reducer: Reducer<Page[], ActionType> = (state = __initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_PAGES_START":
      return { ...state, loading: true, error: "" };
    case "GET_PAGES_SUCCESS":
      return { ...state, loading: false, data: payload.data, count: payload.count };
    case "GET_PAGES_ERROR":
      return { ...state, loading: false, error: "Error fetching pages" };
    default:
      return state;
  }
};

const usePages: Hook<State<Page[]>, FetchWithParamsObject<PageRequestParams>> = () => {
  const wp = useContext(WPContext);

  const [pages, dispatch] = useReducer(reducer, __initialState);

  const fetchPages: FetchWithParamsObject<PageRequestParams> = (params) => {
    dispatch({ type: "GET_PAGES_START" });

    Axios.get<Page[]>(wp.urlWithPath + "/pages", { params })
      .then((pages) => {
        const payload = { data: pages.data, count: Number(pages.headers["x-wp-total"]) };
        dispatch({ type: "GET_PAGES_SUCCESS", payload });
      })
      .catch(() => {
        dispatch({ type: "GET_PAGES_ERROR" });
      });
  };

  return [pages, fetchPages];
};

export default usePages;
