import React from 'react';
import {
   FloatingLabel,
   FormControl,
   FormLabel,
   FormText,
} from 'react-bootstrap';
import './index.css';

const CustomInputTextBox = ({ text, mutedText }) => {
   return (
      <div>
         <FormLabel className='container px-4.5 my-2'>
            <FloatingLabel label={text}>
               {text ? <FormControl placeholder={text} /> : ''}
            </FloatingLabel>
            {mutedText ? <FormText>{mutedText}</FormText> : ''}
         </FormLabel>
      </div>
   );
};

export default CustomInputTextBox;
