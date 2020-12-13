import React from 'react';
import MessageItem from '../src/Components/MessageItem';


const MessageList = ({ messages }) => {
    return (
        <div className='Message-Box'>
        <h1>Customer Message</h1>
        <p>{messages.map( info => {
              return <MessageItem {...info} />;
          })
      }</p>
    </div>
    )
}

export default MessageList
