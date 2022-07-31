import React from 'react';
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useActions} from "../../hooks/useActions";
import {useNavigate, useParams} from 'react-router-dom';
import classes from './Pages.module.css';

const Pages: React.FC = () => {
    const {page, limit, totalCount} = useTypeSelector(state => state.post);
    const {setPostPage} = useActions();
    const pagesCount = Math.ceil(totalCount / limit);
    const pages = [];
    const navigate = useNavigate();
    const currentPage = Number(useParams().id);

    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
    }

    function onClickForPagination(page: number){
        if(page === 0 || page === pagesCount + 1) {
            alert('Невозможно переключить страницу назад/вперед!');
        }else {
            setPostPage(page);
            navigate('/' + page);
        }
    }

    return (
        <div className={classes.pagesDiv}>
            <div onClick={() => onClickForPagination(page -  1)}>
                Назад
            </div>
            <div className={classes.divWithPages}>
                {pages.map(pageItem =>
                    <div
                        className={classes.pageItem}
                        key={pageItem}
                        style={{color:pageItem === currentPage ? 'green' : '#474747'}}
                        onClick={() => onClickForPagination(pageItem)}
                    >
                        {pageItem}
                    </div>
                )}
            </div>

            <div onClick={() => onClickForPagination(page + 1)}>
                Далее
            </div>
        </div>
    );
};

export default Pages;