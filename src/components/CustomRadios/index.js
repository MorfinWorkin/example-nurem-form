import React from 'react';
import { Form, FormLabel } from 'react-bootstrap';



const CustomRadios = ({text}) => {
    return (
        <Form>
            {text ? 
            <FormLabel>{text}</FormLabel>
            : 'Gonorrea marika agrega nombre a este componente'}
            {['radio'].map((type, options) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="Femenino"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                    />
                    <Form.Check
                        inline
                        label="Masculino"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                    <Form.Check
                        inline
                        //disabled
                        label="Otro"
                        name = 'group1'
                        type={type}
                        id={`inline-${type}-3`}
                    />
                </div>
            ))}
        </Form>

    );
}

export default CustomRadios