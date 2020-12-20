import React from 'react';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Home
      </a>
      <ul className="navbar-nav ml-auto">
        <li>
          <a className="nav-link" href="/create">
            Create new post
          </a>
        </li>
      </ul>
    </nav>
  );
}
