import React, {useEffect, useRef, useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from "@mui/material";
import Chats from "./Chats";
import Message from "./Message";
import green from "@mui/material/colors/green";

const theme = createTheme( {
    palette: {
        primary: {
            main: red[600],
        },
    },
});

function App() {
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [chatList] = useState([
        { name: "Some chat", id: "1"},
        { name: "Comlicated discussion", id: "2"},
        { name: "Descriptions and documentation", id: "3"}
    ]);
    const inputRef = useRef(null);

    const onButtonClick = () => {
        let newId = 1;
        if (messages.length > 0) newId = messages[messages.length -1].id + 1;
        if (author.length > 0) {
            setMessages(messages => [...messages, {text: message, author: author, id: newId}]);
        } else {
            alert("Author name needed")
        }
    };

    useEffect( () => {
        if (messages.length > 0) {
            setTimeout( () => {
                alert(author + ", you message send");
            }, 1500);
        }
        focusTextField(inputRef.current);
    }, [messages, author]);

    function focusTextField(input) {
        if (input) {
            input.focus();
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="App main">
                <div className="message-text">
                    <Typography variant="h5" component="div" color="primary">Chat list</Typography>
                    <List sx={{ margin: '10px 0 10px 0', width: '100%', bgcolor: 'background.paper' }}>
                        {chatList.map((item) => <Chats name={item.name} key={item.id} />)}
                    </List>
                </div>
                <div className="messages">
                    <Box
                    component="form"
                    sx={{ m: 1, borderRadius: '10px', gap: '10px', width: '400px', margin: '10px', padding: '15px', backgroundColor: green[100] }}
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant="h5" component="div" color="primary">Messages</Typography>
                    <TextField sx={{ margin: '10px 0 10px 0', bgcolor: '#fff'}}
                    id="outlined-multiline-flexible" fullWidth
                    label="Author name"
                    multiline
                    maxRows={4}
                    autoFocus
                    value={author}
                    inputRef={inputRef}
                    onChange={(e) => setAuthor(e.target.value)}
                    />
                    <TextField sx={{ margin: '10px 0 10px 0', bgcolor: '#fff'}}
                    id="outlined-multiline-flexible" fullWidth
                    label="Message text"
                    multiline
                    maxRows={4}
                    value={message}                    
                    onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button sx={{ margin: '10px 0 10px 0'}} variant="outlined" size="large" fullWidth onClick={onButtonClick}>Send message</Button>
                    </Box>
                    {
                        messages.map(item => {
                            return (
                                <Message author={item.author} text={item.text} key={item.id} />
                            )
                        })
                    }
                </div>
            </div>
        </ThemeProvider>
    );    
}

export default App;