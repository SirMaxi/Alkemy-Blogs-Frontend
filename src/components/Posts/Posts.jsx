import React from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

function posts({ postsData }) {
  const history = useHistory();
  const onPost = async (id) => {
    try {
      await fetch(`${process.env.REACT_APP_BASE_URL}/posts?id=${id}`)
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

  const onModify = async (id) => {
    try {
      await fetch(`${process.env.REACT_APP_BASE_URL}/posts?id=${id}`)
        .then((response) => response.json())
        .then((data) => {
          history.push({
            pathname: '/update',
            state: {
              data,
            },
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async (id) => {
    try {
      await fetch(
        `${process.env.REACT_APP_BASE_URL}/delete?id=${id}`,
      );
    } catch (error) {
      console.log(error);
    }
    swal({
      title: 'Your post has been deleted!',
      icon: 'success',
    }).then((e) => {
      if (e) {
        location.reload();
      }
      location.reload();
    });
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
              onClick={() => onModify(e.id)}
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
