import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import BootstrapTable, { ColumnDescription } from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

interface DataItem {
  [key: string]: any;
}

interface DataModalProps {
  data: DataItem[];
  isOpen: boolean;
  onRequestClose: () => void;
  headername: string;
}

const DataModal: React.FC<DataModalProps> = ({ isOpen, onRequestClose, data, headername }) => {
  const generateColumns = (): ColumnDescription[] => {
    if (data.length === 0) {
      return [];
    }

    const firstDataItem = data[0];
    return Object.keys(firstDataItem).map((key) => ({
      dataField: key,
      text: key,
    }));
  };

  const columns = generateColumns();

  return (
    <>
      <Modal Modal show={isOpen} onHide={onRequestClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="modaltextheader">
            {headername}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BootstrapTable<DataItem> keyField="id" data={data} columns={columns} />
        </Modal.Body>
        <Modal.Footer>
          <div className="d-grid gap-2">
            <Button variant="danger" size="sm" onClick={onRequestClose}>
              Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DataModal;
