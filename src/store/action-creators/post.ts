import {Dispatch} from "redux";
import {PostAction, PostsActionTypes} from "../../types/posts";
import axios from "axios";

export const fetchPosts = (setFilterArray: (arg0: any) => void, page = 1, limit = 10) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostsActionTypes.FETCH_POSTS})
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {_page: page, _limit: limit}
            })

            const totalCount = Number(res.headers['x-total-count']);

            dispatch({type: PostsActionTypes.SET_POST_TOTAL_COUNT, payload: totalCount});

            if(page > Math.ceil(totalCount / limit)){
                dispatch({
                    type: PostsActionTypes.FETCH_POSTS_ERROR,
                    payload: 'Номер страницы в запросе превышает максимальное!'
                });
            }
            dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: res.data});

            setFilterArray(res.data);
        }catch (e) {
            dispatch({
                type: PostsActionTypes.FETCH_POSTS_ERROR,
                payload: 'Возникла ошибка при запросе на сервер!'
            });
        }
    }
}

export function setPostPage (page: number): PostAction {
    return {type: PostsActionTypes.SET_POST_PAGE, payload: page};
}