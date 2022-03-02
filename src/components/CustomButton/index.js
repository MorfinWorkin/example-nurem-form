import React from 'react';
import { Button, FormLabel } from 'react-bootstrap';
import './index.css';

const CustomButton = ({ text }) => {
  return (
      <div>
          {text ? <FormLabel> {text} </FormLabel> : '' }
          <Button>{text ?? 'hola'}</Button>
      </div>
  );
}

export default CustomButton;
