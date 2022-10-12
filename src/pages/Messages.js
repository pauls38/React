import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

const Messages = () => {
    const [messages, setMessages] = useState( [
        {
            id: 1,
            text: 'abracadabra',
            chatId: 2
        },
        {
            id: 2,
            text: 'cadabraabra',
            chatId: 1
        },
        {
            id: 3,
            text: 'brabra',
            chatId: 1
        }
    ]);
const { id } = useParams();
    //console.log(id)
    return (
        <div>

        </div>
    );
};

export default Messages;