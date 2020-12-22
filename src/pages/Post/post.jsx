import React from 'react';
import './post.css';

function post(props) {
  const data = props.location.state.data;

  return (
    <div className="container">
      <h2 className="text-center" style={{ margin: '30px 0px' }}>
        Post Details
      </h2>
      <div className="card shadow">
        {data.image ? (
          <img
            className="card-img-top card-header p-0"
            src={data.image}
            alt="Card image"
          />
        ) : null}
        <div className="card-header">
          <h4 className="card-title text-center">{data.title}</h4>
        </div>
        <div className="card-body">
          <p className="card-text text-center">{data.body}</p>
          <a href="/">Back to Home</a>
        </div>
      </div>
    </div>
  );
}

export default post;
