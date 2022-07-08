// @ts-nocheck
import React from "react";
import { Modal, Container, Table, Button } from "react-bootstrap";

export default function ModalUsers(props) {
  const usis = {
    name:'This is a test',
    import:  true
    }
  console.log(usis.name)
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-90w"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Information about Users
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Company</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.us.name}</td>
                <td>{props.us.username}</td>
                <td>{props.us.email}</td>
                <td>
                  <td>{" City: " + props.us.address.city}</td>
                  <br />
                  <td>{" Street: " + props.us.address.street}</td>
                  <br />
                  <td>{" Suite: " + props.us.address.suite}</td>
                  <br />
                  <td>{" Zipcode: " + props.us.address.zipcode}</td>
                  <br />
                  <td>{" Geo-Latitude: " + props.us.address.geo.lat}</td>
                  <td>{" Geo-Longitud: " + props.us.address.geo.lng}</td>
                </td>
                <td>
                  <td>{"Bs: " + props.us.company.bs}</td>
                  <br />
                  <td>{"Catch Phrase:" + props.us.company.catchPhrase}</td>
                  <br></br>
                  <td>{"Name: " + props.us.company.name}</td>
                </td>
                <td>{props.us.website}</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
