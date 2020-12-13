import React from "react";
import MessageItem from "../Messages/MessageItem";

const MessageList = ({ messages }) => {
  console.log(messages.length);
  return (
    <div className="Message-Box">
      <h1>Taste Admin</h1>
      <p className="noti">You have {messages.length} new message!</p>
      <p>
        {messages.map((info) => {
          return <MessageItem {...info} />;
        })}
      </p>
    </div>
  );
};

export default MessageList;
