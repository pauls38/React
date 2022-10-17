import React from 'react';
import './App.css';
import ChatListPage from './pages/ChatListPage';
import MessageListPage from './pages/MessageListPage';

import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import {useState} from 'react';
import { ThemeContext,themes } from './context';

function App() {
    const [currentTheme, setCurrentTheme] = useState(themes.light);

    const toggleTheme = () => {
        setCurrentTheme(prevState => prevState === themes.light ? themes.dark : themes.light)
    }
    return (
        <ThemeContext.Provider value={{theme: currentTheme, toggleTheme: toggleTheme}}>
        <Header />
        <main style={{background: currentTheme.background, color: currentTheme.textColor}}>
        <Routes>
            <Route path={'/'} element={<ChatListPage />} />
            <Route path={'/message/:id'} element={<MessageListPage />} />
        </Routes>
        </main>
        </ThemeContext.Provider>
    );
}

export default App;