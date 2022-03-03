import React from 'react';
import { Form, FormLabel } from 'react-bootstrap';

const CustomRadios = ({ title, option1, option2, option3 }) => {
   return (
      <Form className='custom-margin'>
         {title ? (
            <FormLabel>{title}</FormLabel>
         ) : (
            'Define un titulo para este componente'
         )}
         {['radio'].map((type) => (
            <div key={`inline-${type}`} className='custom-margin'>
               <Form.Check
                  inline
                  label={option1}
                  name='group1'
                  type={type}
                  id={`inline-${type}-1`}
               />
               <Form.Check
                  inline
                  label={option2}
                  name='group1'
                  type={type}
                  id={`inline-${type}-2`}
               />
               <Form.Check
                  inline
                  //disabled
                  label={option3}
                  name='group1'
                  type={type}
                  id={`inline-${type}-3`}
               />
            </div>
         ))}
      </Form>
   );
};

export default CustomRadios;
