import React, {useState} from "react";
import {useParams} from 'react-router-dom';

const MessageListPage = () => {
    const [messageList, setMessageList] = useState([
        {
            id: 1,
            text: 'Where are you?',
            chatId: 2
        },
        {
            id: 2,
            text: 'are you?',
            chatId: 2
        },
        {
            id: 3,
            text: 'Where you?',
            chatId: 1
        },
        {
            id: 1,
            text: 'You?',
            chatId: 1
        },
        {
            id: 1,
            text: 'Ne?',
            chatId: 3
        }
    ]);
    const {id} = useParams();
    const messages = messageList.filter((message) => {
        if(!id) return true

        return message.chatId === Number(id)
    })
    return (
        <div>
            {messageList.map((message) => {
                return(
                    <div key={message.id}>
                        {message.text}
                    </div>
                )
            })}
        </div>
    );
};

export default MessageListPage;