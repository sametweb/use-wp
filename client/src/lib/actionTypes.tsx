export interface IAction {
  type: ActionTypes;
  payload?: any;
}
type ActionTypes =
  | "GET_ALL_START"
  | "GET_ALL_SUCCESS"
  | "GET_ALL_ERROR"
  | "GET_POST_COMMENTS_START"
  | "GET_POST_COMMENTS_SUCCESS"
  | "GET_POST_COMMENTS_ERROR";
