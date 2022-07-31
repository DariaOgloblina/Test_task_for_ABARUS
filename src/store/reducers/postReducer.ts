import {PostAction, PostsActionTypes, PostState} from "../../types/posts";

const initialState: PostState = {
    posts: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    totalCount: 0
}

export const postReducer = (state = initialState, action: PostAction) :PostState => {
    switch (action.type){
        case PostsActionTypes.FETCH_POSTS:
            return {...state, loading: true};
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {...state, posts: action.payload, loading: false};
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return {...state, loading: false, error: action.payload};
        case PostsActionTypes.SET_POST_PAGE:
            return {...state, page: action.payload};
        case PostsActionTypes.SET_POST_TOTAL_COUNT:
            return {...state, totalCount: action.payload};
        default:
            return state;
    }
}