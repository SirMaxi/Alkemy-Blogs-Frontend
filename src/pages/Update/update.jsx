import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

function update(props) {
  const history = useHistory();
  const data = props.location.state.data;
  console.log('test');

  const [newData, setNewData] = useState({
    title: data.title,
    body: data.body,
  });

  const onChange = (e) => {
    const name = e.target.id;
    const { value } = e.target;
    let changedData = data;
    changedData = { ...changedData, [name]: value };
    setNewData(changedData);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!newData.title || !newData.body) {
      swal({
        title: 'All fields are required!',
        icon: 'warning',
      });
      return;
    }
    const sendData = newData;
    try {
      await fetch(`${process.env.REACT_APP_BASE_URL}/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify(sendData),
        headers: {
          'Content-type': 'application/json',
        },
      });
    } catch (error) {
      console.log(error);
    }

    swal({
      title: 'Post updated!',
      icon: 'success',
    }).then((e) => {
      history.push('/');
    });
  };

  return (
    <div className="custom-container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={newData.title}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <input
            type="text"
            className="form-control"
            id="body"
            value={newData.body}
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

export default update;
