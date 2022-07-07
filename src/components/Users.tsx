// @ts-nocheck
import { React, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Eye } from "react-bootstrap-icons";
import "./css/components.css";
import ModalUser from "./Modal"

const API = process.env.REACT_APP_API;

export default function Users() {
  const [users, setUsers] = useState([]);
  const [fullscreen, setFullscreen] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  const getUsers = async () => {
    const res = await fetch(`${API}/api/users/`);
    const data = await res.json();
    console.log(data)
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <div className="row">
      <div className="col md-8" style={{ textAlignLast: "center" }}>
      <Table striped bordered hover>
          <thead>
            <tr >
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              
              <tr
              >
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <button className="btn btn-secondary btn-circle"onClick={() => setModalShow(true)}>
                  <Eye />
                </button>
                  <ModalUser 
                  show={modalShow} 
                  onHide={() => setModalShow(false)} 
                  us={user}
                  fullscreen={fullscreen}/>
              </tr>
            ))}
            
          </tbody>
        </Table>
      </div>
    </div>
  );
}
