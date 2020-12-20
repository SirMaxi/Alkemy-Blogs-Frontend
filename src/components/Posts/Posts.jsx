import React from 'react';
import { useHistory } from 'react-router-dom';

function posts({ postsData }) {
  const history = useHistory();
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
    postsData.map((e) => (
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

  return <>{renderPosts()}</>;
}

export default posts;
