import React from 'react';
import { Card } from '@material-ui/core';

function Message(props) {
  return (
    <div>
      <Card>

      </Card>
      <h2>{props.username}: {props.text}</h2>
    </div>
  )
}

export default Message;