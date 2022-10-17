import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ChatsPage from "./pages/ChatsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Messages from "./pages/Messages";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<HomePage />}/>
                <Route path={'/profile'} element={<ProfilePage />}/>
                <Route path={'/chats'} element={<ChatsPage />}/>
                <Route path={'/messages/:id'} element={<Messages />}/>
                <Route path={'*'} element={<NotFoundPage />}/>
            </Routes>
        </div>
    );
}

export default App;