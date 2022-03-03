import React from 'react';
import ReactDOM from 'react-dom';
import { SubmitFormButton } from './components/Form';
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

      <div>
         <CustomInputTextBox text='Nombre' />
         <CustomInputTextBox text='Apellidos' />
         <CustomInputTextBox text='Edad' />
         <CustomRadios
            title='Genero'
            option1='Femenino'
            option2='Masculino'
            option3='otro'
         />
         <CustomInputTextBox text='Domicilio' />
         <Stack direction='horizontal' gap={3}>
            <CustomInputTextBox text='Telefono' />
            <CustomInputTextBox text='Cel' />
         </Stack>
         <CustomInputTextBox text='Motivo de la consulta' />
         <CustomInputTextBox text='Email' />

         <p> Emergencia notificar a : </p>
         <CustomInputTextBox text='Nombre' />
         <CustomInputTextBox text='Cel' />
      </div>

      <SubmitFormButton />
      <p>USELESS BUTTONS</p>
      <CustomButton />
   </React.StrictMode>,
   document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
