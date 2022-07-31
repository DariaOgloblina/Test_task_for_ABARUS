import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import PostList from "./PostList/PostList";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/:id" element={<PostList/>}/>
            <Route path="*" element={<Navigate to="/1" replace />}/>
        </Routes>
    );
};

export default AppRouter;