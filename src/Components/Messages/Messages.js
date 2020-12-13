import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import MessageList from "../../MessageList";
import './Messages.css'

const Messages = (props) => {
  const [messages, setMessages] = useState([{}]);
  const [box, setBox] = useState([]);

  useEffect(() => {
    getMessage()
  }, []);

  const getMessage = () => {
    db.collection("messages")
    .onSnapshot((snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          message: doc.data().message,
        }))
      );
    })
  };

  return (
    <div>
      <MessageList messages={messages} />
    </div>
  );
};

export default Messages;
