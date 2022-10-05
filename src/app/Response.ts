export interface Response<T> {
    data: any;
    message?: string;
    title: T;
}