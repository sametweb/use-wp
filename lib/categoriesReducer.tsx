import { IAction, IData, ICategory } from "./types";

type CategoriessActionTypes =
  | "GET_CATEGORIES_START"
  | "GET_CATEGORIES_SUCCESS"
  | "GET_CATEGORIES_ERROR";

export const DEFAULT_CATEGORIES: IData<ICategory> = {
  data: [],
  loading: false,
  error: "",
};

export const categoriesReducer = (
  state: IData<ICategory> = DEFAULT_CATEGORIES,
  action: IAction<CategoriessActionTypes>
): IData<ICategory> => {
  switch (action.type) {
    case "GET_CATEGORIES_START":
      return { ...state, loading: true, error: "" };
    case "GET_CATEGORIES_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_CATEGORIES_ERROR":
      return { ...state, loading: false, error: "Error fetching categories" };
    default:
      return state;
  }
};
