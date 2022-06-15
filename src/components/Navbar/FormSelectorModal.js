import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import "../../styles/components/Navbar/FormSelectorModal.css";

function FormSelectorModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-subnav prijava" onClick={handleShow}>
        Prijava za putovanje!
      </Button>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Prijavite svoje putovanje!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            className="btn-modal-prijava"
            onClick={() => {
              window.location.href = "/prijava-skolska-putovanja";
            }}
          >
            školska putovanja
          </Button>
          <Button
            className="btn-modal-prijava"
            onClick={() => {
              window.location.href = "/prijava-ostala-putovanja";
            }}
          >
            ostala putovanja
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FormSelectorModal;
