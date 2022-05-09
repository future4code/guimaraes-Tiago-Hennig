import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import CharacterListPage from '../pages/CharacterListPage/CharacterListPage';
import CharacterDetailPage from '../pages/CharacterDetailPage/CharacterDetailPage';


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<CharacterListPage />} />
                <Route path="/details" element={<CharacterDetailPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router