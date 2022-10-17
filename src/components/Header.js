import React, { useContext } from "react";
import { ThemeContext } from "../context";

const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <header style={{display: 'flex', margin: 'auto', width: 200}}>
            <button>
                Light
            </button>
            <button>
                Dark
            </button>
        </header>
    );
};

export default Header;