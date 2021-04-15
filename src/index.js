import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Drica"
        timeAgo="Today at 3:35PM"
        comment="Good Job"
      />
      <CommentDetail 
        author="Diego"
        timeAgo="Today at 11:00AM" 
        comment="I'm hungry"
      />
      <CommentDetail
        author="Dora"
        timeAgo="Yesterday at 10:38PM" 
        comment="I want a hug"
      />
      
    </div>
  );
};


ReactDOM.render(
    <App />, document.querySelector('#root')
);

  
//style for free: https://semantic-ui.com
//public css https://cdnjs.com/libraries/semantic-ui
//