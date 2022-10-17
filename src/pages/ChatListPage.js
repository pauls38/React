import React, {useState} from "react";
import { Link } from "react-router-dom";

const ChatListPage = () => {
    const [chatList, setChatList] = useState( [
        {
            id: 1,
            name: 'John'
        },
        {
            id: 2,
            name: 'Alex'
        },
        {
            id: 3,
            name: 'James'
        }
    ]);
    return (
        <div>
            {chatList.map((chat) => {
                return(
                    <Link style= {{display: 'block', textDecoration: 'none'}} to={`/message/${chat.id}`} key={chat.id}>
                    {chat.name}
                    </Link>
                )
            })}
        </div>
    );
};

export default ChatListPage;