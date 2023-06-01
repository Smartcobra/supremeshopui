import React from "react";
import Button from "react-bootstrap/Button";
//import Modal from 'react-modal';
import Modal from "react-bootstrap/Modal";
import "./Util.styles.css";

type ModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  content: string;
  headername: string;
};

const ShowModal: React.FC<ModalProps> = ({ isOpen, onRequestClose, content, headername }) => {
  return (
    // <Modal isOpen={isOpen} onRequestClose={onRequestClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>/<Modal>  this is for react-modal
    // used react bootstrap modal
    <Modal Modal show={isOpen} onHide={onRequestClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modaltextheader">
          {headername}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="modaltextbody">{content}</p>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-grid gap-2">
          <Button variant="danger" size="sm" onClick={onRequestClose}>
            Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowModal;
