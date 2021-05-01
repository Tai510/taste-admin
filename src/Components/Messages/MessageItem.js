import React from "react";
import { db } from "../../firebase";
import { Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const MessageItem = (props) => {

  const removeItem = (e) => {
    e.preventDefault();
    let deleteMsg = ('Are you sure you want to delete this message?');
    let result = window.confirm(deleteMsg);
    if(result == true) {
      db.collection("messages").doc(props.id).delete();
    }
  };

  return (
    <div className="Box">
      <div className="message-list">
        <List>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={props.email}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {props.name} -
                  </Typography>
                  {" " + props.message}
                </React.Fragment>
              }
            />
          </ListItem>
          <Button onClick={removeItem} variant="contained" color="secondary">
            Delete Message
          </Button>
        </List>
      </div>
    </div>
  );
};

export default MessageItem;
