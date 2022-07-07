// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
      <Link className="navbar-brand" to="/">
        Wazuh Test
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/user">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/task">
              Tasks
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

/*{users.map((user) => (
  <>
  <tr
    data-toggle="collapse"
    className="accordion-toggle"
  >
    <td>{user.name}</td>
    <td>{user.username}</td>
    <td>{user.email}</td>
    <button className="btn btn-secondary btn-circle">
      <Eye />
    </button>
  </tr>
  <tr>
  <td colspan="6" class="hiddenRow">
    <div className="accordian-body collapse">
      Demo2
    </div>
  </td>
</tr>
  </>

  
))}*/