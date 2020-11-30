import React, {useState} from 'react';
import { Modal, Image } from 'react-bootstrap';

const IndividualPhoto = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Image style={{ height: '50px', width: '50px' }} src={props.photo.url} key={props.photo.id} thumbnail onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Image src={props.photo.url} fluid />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default IndividualPhoto;

