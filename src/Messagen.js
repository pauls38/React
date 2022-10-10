import React from 'react';
import './Message.css';

function Message() 
{const name = 'Пашка-Америка!';
    return (
        <div className="appeal">
            <header className="appeal-header">
         <p>Это твоё знакомство с React-ом, <h1>{name}</h1></p>
         </header>   
        </div>
    );
};

Message.propTypes = {

};

export default Message;
