import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar"/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at m6:00PM</span>
            <div className="text">Nice blog post!</div>
          </div>
        </div>
      </div>
    </div>
  );
};


ReactDOM.render(
    <App />, document.querySelector('#root')
);

  
//style for free: https://semantic-ui.com
//public css https://cdnjs.com/libraries/semantic-ui
//