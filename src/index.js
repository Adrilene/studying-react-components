import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Drica"
          timeAgo="Today at 3:35PM"
          comment="Good Job"
          />
      </ApprovalCard>

      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this? 
        </div>
      </ApprovalCard>
      
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
      
      <Message 
        header="Changes in Service
        "
        text="We just updated our privacy policy here to better service our customers."
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