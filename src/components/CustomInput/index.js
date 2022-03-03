import React from 'react';
import { FormControl, FormGroup, FormLabel, FormText, } from 'react-bootstrap';
import './index.css'


const CustomInputTextBox = ({ text, mutedText, innerText }) => {
    return (
        <div>
            <FormGroup className='mb-1' controlId='customInputTextBox'>
                {Text}
            </FormGroup>
            {text ?
                <FormLabel>{text}</FormLabel>
                : 'Missing Text in code'}
            {innerText ?
                <FormControl className='input-group' type='email' placeholder={innerText} />
                : 'Add inner text'}
            {mutedText ?
                <FormText className='text-muted'>
                    {mutedText}
                </FormText> :
                'Add a muted text'}

        </div>
    );
}

export default CustomInputTextBox
