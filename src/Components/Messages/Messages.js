import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import './Messages.css'

const Messages = () => {
  const [messages, setMessages] = useState([{}]);
  const [box, setBox] = useState([]);

  useEffect(() => {
    getMessage();
    onDelete()
  }, []);

  const getMessage = () => {
    db.collection("messages")
      .get()
      .then((snapshot) => {
        // console.log(snapshot)
        const message = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          message.push(data);
          
        });
        setMessages(message);
        console.log("Messages :", messages);
      })
      .catch((error) => console.log(error));
  };

  const onDelete = () => {
    db.collection('messages').doc(messages.id).delete()
  }

  
  

  return (
    <div className='Message-Box'>
        <h1>Customer Message</h1>
        <p>{
          messages && messages.map( info => {
              return (
                  <div className='Box'>
                    <div className='name-email-div'>
                      <li id='name'><label>Name: {info.name}</label></li>
                      <li id='email'><label>Email: {info.email}</label></li>
                    </div>
                      <li id='message'><label>Message: {info.message}</label></li>
                      <button onClick={onDelete}>Delete Message</button>
                  </div>
              )
          })
      }</p>
    </div>
  );
};

export default Messages;
