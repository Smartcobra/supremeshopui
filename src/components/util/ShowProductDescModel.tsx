import React, { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import { IProductDescription } from "../product/ProductModel";

interface JsonModalProps {
  pData: IProductDescription;
  isOpen: boolean;
  onRequestClose: () => void;
  headername: string;
}

const ProductDescModal: React.FC<JsonModalProps> = ({ isOpen, onRequestClose, pData, headername }) => {
  const renderTableRows = () => {
    return Object.entries(pData).map(([key, value]) => (
      <tr>
        <td>{key}</td>
        <td>{value}</td>
      </tr>
    ));
  };

  return (
    <>
      <Modal show={isOpen} onHide={onRequestClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Product Description Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Specification</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onRequestClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductDescModal;
