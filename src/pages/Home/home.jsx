import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function home() {
  const history = useHistory();
  const [posts, setPosts] = useState(null);

  const list = async () => {
    try {
      await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    list();
  }, []);

  if (!posts) {
    return <div>No hay listado por el momento</div>;
  }

  const onPost = async (id) => {
    try {
      await fetch(
        `https://jsonplaceholder.typicode.com/posts?id=${id}`,
      )
        .then((response) => response.json())
        .then((data) => {
          history.push({
            pathname: '/post',
            state: {
              data,
            },
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onModify = (e) => {
    history.push({
      pathname: '/update',
      state: {
        data: e,
      },
    });
  };

  const onDelete = async (id) => {
    try {
      await fetch(
        `https://jsonplaceholder.typicode.com/delete?id=${id}`,
      );
    } catch (e) {
      console.log(e);
    }
    alert('Operation deleted successfully');
    window.location.reload();
  };

  const renderPosts = () =>
    posts.map((e) => (
      <tbody key={e.id}>
        <tr>
          <th scope="row">{e.id}</th>
          <td>{e.title}</td>
          <td>
            <button
              className="btn btn-outline-dark"
              onClick={() => onPost(e.id)}
            >
              View
            </button>
          </td>
          <td>
            <button
              className="btn btn-outline-warning"
              onClick={() => onModify(e)}
            >
              Modify
            </button>
          </td>
          <td>
            <button
              className="btn btn-outline-danger"
              onClick={() => onDelete(e.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    ));

  return (
    <div>
      <div className="container">
        <h1
          className="text-center title-home"
          style={{ margin: '30px 0px' }}
        >
          Posts
        </h1>
        <div className="row">
          <div className="col-sm">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col"> </th>
                  <th scope="col"> </th>
                  <th scope="col"> </th>
                </tr>
              </thead>
              {renderPosts()}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
