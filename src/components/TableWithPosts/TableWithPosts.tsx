import React, {useState} from 'react';
import {PostJSONObject} from "../../types/posts";
import classes from './TableWithPosts.module.css';

interface TableProps{
    filterArray: PostJSONObject[];
}

const TableWithPosts = ({filterArray}:TableProps) => {

    const [isIncrementInID, setIsIncrementInID] = useState<boolean>(true);
    const [isIncrementInTitle, setIsIncrementInTitle] = useState<boolean>(false);
    const [isIncrementInBody, setIsIncrementInBody] = useState<boolean>(false);

    enum SortedTypes {
        SORT_BY_ID = 'SortById',
        SORT_BY_TITLE = 'SortByTitle',
        SORT_BY_BODY = 'SortByBody'
    }

    function sortFilterArray(type: SortedTypes) {
        switch (type){
            case SortedTypes.SORT_BY_ID:
                if(isIncrementInID){
                    filterArray.sort((first, second) => first.id < second.id ? 1 : -1);
                }else{
                    filterArray.sort((first, second) => first.id > second.id ? 1 : -1);
                }
                setIsIncrementInID(!isIncrementInID);
                setIsIncrementInTitle(false);
                setIsIncrementInBody(false);
                break;
            case SortedTypes.SORT_BY_TITLE:
                if(isIncrementInTitle){
                    filterArray.sort((first, second) => first.title < second.title ? 1 : -1);
                }else{
                    filterArray.sort((first, second) => first.title > second.title ? 1 : -1);
                }
                setIsIncrementInTitle(!isIncrementInTitle);
                setIsIncrementInID(true);
                setIsIncrementInBody(false);
                break;
            case SortedTypes.SORT_BY_BODY:
                if(isIncrementInBody){
                    filterArray.sort((first, second) => first.body < second.body ? 1 : -1);
                }else{
                    filterArray.sort((first, second) => first.body > second.body ? 1 : -1);
                }
                setIsIncrementInBody(!isIncrementInBody);
                setIsIncrementInID(true);
                setIsIncrementInTitle(false);
                break;
        }
    }

    return (
        <table>
            <thead>
            <tr>
                <th className={classes.th} onClick={() => sortFilterArray(SortedTypes.SORT_BY_ID)}>ID <span>▼</span></th>
                <th className={classes.th} onClick={() => sortFilterArray(SortedTypes.SORT_BY_TITLE)}>Заголовок <span>▼</span></th>
                <th className={classes.th} onClick={() => sortFilterArray(SortedTypes.SORT_BY_BODY)}>Описание <span>▼</span></th>
            </tr>
            </thead>
            <tbody>
            {filterArray.map(post =>
                <tr key={post.id}>
                    <td className={classes.tdId}>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default TableWithPosts;