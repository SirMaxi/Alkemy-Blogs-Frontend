import React, { useEffect, useState } from 'react';
import Posts from '../../components/Posts/Posts';
import Pagination from '../../components/Pagination/Pagination';

function home() {
  const [posts, setPosts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const list = async () => {
    try {
      await fetch(`${process.env.REACT_APP_BASE_URL}/posts`)
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

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              <Posts postsData={currentPosts} />
            </table>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
