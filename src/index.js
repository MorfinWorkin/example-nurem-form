import React from 'react';
import ReactDOM from 'react-dom';
import { MyButton, Form, SelectBox, InputTextBox, BigTextBox, SubmitFormButton } from './components/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <InputTextBox />
    <SelectBox />
    <BigTextBox />
    {/* <Form /> */}
    <SubmitFormButton />
    <Button>Hello</Button>
    <MyButton />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
