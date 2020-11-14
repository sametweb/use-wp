export interface IData<T> {
    data: Array<T>;
    loading: boolean;
    error: string;
}

export interface IAction<T> {
    type: T;
    payload?: any;
}
