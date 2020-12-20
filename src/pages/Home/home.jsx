import React, { useEffect, useState } from 'react';
import Posts from '../../components/Posts/Posts';

function home() {
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
              <Posts postsData={posts} />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
