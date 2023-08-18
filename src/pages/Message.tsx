import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
  Grid
} from "@mui/material";
import { Message } from "../types";
import axios from "axios";


const MessageApp: React.FC = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(
    null
  );
  const [messages,setMessages] = useState<Message>([{}])


  const handleSelectMessage = (message: Message) => {
    setSelectedMessage(message);
  };

  useEffect(()=> {
    axios.get("http://localhost:8000/contact")
    .then((res) => setMessages(res.data))
  }, [])

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6">Vos messages</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper elevation={3} style={{ height: "83vh", overflow: "auto" }}>
            <List>
              {messages.map((message:any) => (
                <div key={message.id}>
                  <ListItem
                    button
                    onClick={() => handleSelectMessage(message)}
                    selected={selectedMessage?.id === message.id}
                  >
                    <ListItemText
                      primary={message.nameAuthor}
                      secondary={message.message}
                    />
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper elevation={3} style={{ height: "80vh", padding: "16px" }}>
            {selectedMessage ? (
              <div>
                <Typography variant="h6">
                  {selectedMessage.email}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {selectedMessage.nameAuthor} - {selectedMessage.timestamp}
                </Typography>
                <Typography variant="body1">
                  {selectedMessage.message}
                </Typography>
              </div>
            ) : (
              <Typography variant="subtitle1">
                Sélectionnez un message à lire
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageApp;
