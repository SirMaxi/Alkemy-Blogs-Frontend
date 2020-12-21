import React, { useState } from 'react';
import swal from 'sweetalert';
import './create.css';

function create() {
  const [data, setData] = useState({
    title: '',
    body: '',
  });

  const onChange = (e) => {
    console.log(e);
    const name = e.target.id;
    const { value } = e.target;
    console.log(name);
    console.log(value);
    let newData = data;
    newData = { ...newData, [name]: value };
    setData(newData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!data.title || !data.body) {
      swal({
        title: 'All fields are required!',
        icon: 'warning',
      });
      return;
    }
    const sendData = data;
    try {
      await fetch(`${process.env.REACT_APP_BASE_URL}/addoperation`, {
        method: 'POST',
        body: JSON.stringify(sendData),
        headers: {
          'Content-type': 'application/json',
        },
      });
    } catch (error) {
      console.log(error);
    }

    swal({
      title: 'New post added!',
      icon: 'success',
    });
    window.location.reload();
  };
  return (
    <div className="custom-container">
      <h2 className="text-center">Create a new post</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={data.title}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <input
            type="text"
            className="form-control"
            id="body"
            value={data.body}
            onChange={onChange}
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default create;
