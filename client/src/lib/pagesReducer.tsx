import { IAction, IData } from "./types";

interface IPage {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  slug: string;
  status: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  categories: Array<number>;
  author: number;
  featured_media: number;
  comment_status: "open" | "closed";
  tags: Array<number>;
  menu_order: number;
}

type PagesActionTypes =
  | "GET_PAGES_START"
  | "GET_PAGES_SUCCESS"
  | "GET_PAGES_ERROR";

export const DEFAULT_PAGES: IData<IPage> = {
  data: [],
  loading: false,
  error: "",
};

export const pagesReducer = (
  state: IData<IPage> = DEFAULT_PAGES,
  action: IAction<PagesActionTypes>
): IData<IPage> => {
  switch (action.type) {
    case "GET_PAGES_START":
      return { ...state, loading: true, error: "" };
    case "GET_PAGES_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_PAGES_ERROR":
      return { ...state, loading: false, error: "Error fetching pages" };
    default:
      return state;
  }
};
