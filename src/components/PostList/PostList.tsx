import React, {useEffect, useState} from 'react';
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useActions} from "../../hooks/useActions";
import Pages from "../Pages/Pages";
import {useParams} from "react-router-dom";
import {PostJSONObject} from "../../types/posts";
import TableWithPosts from "../TableWithPosts/TableWithPosts";
import Loader from "../Loader/Loader";
import ErrorContent from "../ErrorContent/ErrorContent";
import classes from './PostList.module.css';

const PostList: React.FC = () => {
    const {posts, error, loading, page} = useTypeSelector(state => state.post);
    const {fetchPosts, setPostPage} = useActions();
    const paramsPage = Number(useParams().id);
    const [filterPost, setFilterPost] = useState<string>('');
    const [filterArray, setFilterArray] = useState<PostJSONObject[]>([]);

    useEffect(() => {
        fetchPosts(setFilterArray, paramsPage);
        setPostPage(paramsPage)
        setFilterPost('');
    }, [page])

    function changeFilterPost(value: string){
        setFilterPost(value);
        if(value){
            let newArray = posts.filter(function (post){
                return (
                    post.title.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
                    post.body.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
                    String(post.id).toLowerCase().indexOf(value.toLowerCase()) !== -1
                );
            })
            setFilterArray(newArray);
        }
        else{
            setFilterArray(posts);
        }
    }

    if(loading){
        return <Loader/>;
    }else if(error){
        return <ErrorContent error={error}/>;
    }

    return (
        <div className={classes.generalDiv}>
            <div className={classes.findPostInput}>
                <input
                    type="text"
                    className={classes.searchInput}
                    placeholder="Поиск"
                    value={filterPost}
                    onChange={(e)=> {changeFilterPost(e.target.value)}}
                />
                    <img src="https://cdn-icons-png.flaticon.com/512/5885/5885890.png" alt="" className={classes.searchIcon}/>
            </div>

            <TableWithPosts filterArray={filterArray}/>
            <Pages/>
        </div>
    );
};

export default PostList;