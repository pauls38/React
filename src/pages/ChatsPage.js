import React, {useState} from "react";
import { Link } from "react-router-dom";

const ChatsPage = () => {
const [chats, setChats] = useState( [
    {
        id: 1,
        name: 'Marian'
    },
    {
        id: 2,
        name: 'Andrian'
    }
]);
const [name, setName] = useState('');

const handleDelete = (id) => {
    const filtered = chats.filter((chat) => chat.id !== id);
    setChats(filtered)
};

const handleAdd = () => {
    const obj = {
        id: Date.now(),
        name: name
    }
    setChats(prevState => [...prevState, obj])
}
return (
    <div>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={handleAdd}>Добавить чат</button>        
        {chats.map((chat) => {
            return(
                <div key={chat.id}>                
                <Link to={`/messages/${chat.id}`} key={chat.id}>
                    {chat.name}
                </Link>    
                <button onClick={() => handleDelete(chat.id)}>x</button>                
                </div>
            )
        })}
    </div>
);
};

export default ChatsPage;