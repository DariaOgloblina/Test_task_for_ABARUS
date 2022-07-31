export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    SET_POST_PAGE = 'SET_POST_PAGE',
    SET_POST_TOTAL_COUNT = 'SET_POST_TOTAL_COUNT'
}

export interface PostState {
    posts: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
    totalCount: number;
}

interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload: object[];
}

interface FetchPostsErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}

interface SetPostsPageAction {
    type: PostsActionTypes.SET_POST_PAGE;
    payload: number;
}

interface SetPostsTotalCountAction {
    type: PostsActionTypes.SET_POST_TOTAL_COUNT;
    payload: number;
}

export type PostAction =
    FetchPostsAction |
    FetchPostsSuccessAction |
    FetchPostsErrorAction |
    SetPostsPageAction |
    SetPostsTotalCountAction;

export interface PostJSONObject{
    id: number,
    title: string,
    body: string
}