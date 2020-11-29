import React, { useState, useRef } from 'react';
import { Form } from 'react-bootstrap';
import { CameraFill } from 'react-bootstrap-icons';
import { Fab } from '@material-ui/core';

const UploadedPhotos = (props) => {

  const hiddenFile = useRef(null);

  const handleClick = (event) => {
    hiddenFile.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

  return (
    <>
      <Fab size='small' aria-label='upload Photos' style={{ marginRight: '10px' }} onClick={handleClick}>
        <CameraFill />
      </Fab>
      <input type="file" ref={hiddenFile} onChange={handleChange} style={{ display: 'none' }} />
    </>
  );
};

export default UploadedPhotos;



{ /* <Form.Label><b>{' Upload your photos '}</b></Form.Label>
<Form.File id="uploadPhotoForm">
  <Form.File.Label>
    <Fab size='small' color='secondary' aria-label='add photos'>
      <CameraFill />
    </Fab>
  </Form.File.Label>
  <Form.File.Input />
</Form.File>
<Button variant="outline-dark">{'Upload your photos '}{<CameraFill />}{photoValidate}</Button> */ }