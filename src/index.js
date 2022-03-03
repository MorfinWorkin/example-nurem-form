import React from 'react';
import ReactDOM from 'react-dom';
import { MyButton, Form, SelectBox, InputTextBox, BigTextBox, SubmitFormButton } from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from './components/CustomButton';
import CustomInputTextBox from './components/CustomInput';
import CustomRadios from './components/CustomRadios';
import { Stack } from 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode>
    {/* <InputTextBox />
    <SelectBox />
    <BigTextBox /> 
    <Form /> */}
    <Stack gap={3}>
      <CustomInputTextBox
        className='float-left'
        text='Email'
        mutedText='correo@ejemplo.com'
        innerText='Ingresa tu correo perro'
      />
      <CustomInputTextBox
        text='Nombre'
        mutedText=' '
        innerText='Ingresa tu nombre baby'
      />
      <CustomInputTextBox
        text='Apellido'
        mutedText=' '
        innerText='Ingresa tu apellido baby'
      />
      <CustomRadios />
    </Stack>
    <SubmitFormButton />
    <p>USELESS BUTTONS</p>
    <CustomButton />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
