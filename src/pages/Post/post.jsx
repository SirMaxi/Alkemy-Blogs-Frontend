import React from 'react';

function post(props) {
  const { data } = props.location.state;
  const postData = data[0];
  return (
    <div className="container">
      <h2 className="text-center" style={{ margin: '30px 0px' }}>
        Post Details
      </h2>
      <div className="card shadow">
        <div className="card-header">
          <h4 className="card-title text-center">{postData.title}</h4>
        </div>
        <div className="card-body">
          <p className="card-text">{postData.body}</p>
          <a href="/">Back to Home</a>
        </div>
      </div>
    </div>
  );
}

export default post;
