import React, { useEffect, useState, useMemo } from "react"
import './App.css';
import {Button, Card, Toast, ToastContainer  } from 'react-bootstrap';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import validator from 'validator'
import countryList from 'react-select-country-list'
import { nanoid } from "nanoid";

function App() {
  const countries = useMemo(() => countryList().getData(), [])
  const [show, setShow] = useState(false);

  const [step, setStep] = useState(0);
  const [error, setError] = useState('');
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")

  const handleChangeName = (event) => { setName(event.target.value ); }
  const handleChangeEmail = (event) => { setEmail(event.target.value ); }
  const handleChangePhone = (event) => { setPhone(event.target.value ); }
  const handleChangePassword2 = (event) => { setPassword2(event.target.value ); }
  const handleChangePassword1 = (event) => { setPassword1(event.target.value ); }
  const handleChangeCountry = (event) => { setCountry(event.target.value ); }

  const validateForm1 = () => {
    if (name === '') return setError('Enter Name please')
    if(validator.isEmail(email) !== true) return setError('Email is not valid');
    if(validator.isMobilePhone(phone) !== true) return setError('Phone number is not valid');
    if(country === '') return setError ('Please select your country.');
    return setError('');
  }
  
  useEffect(() => {
    validateForm1();
  }, [name, email, country, phone])

  useEffect(() => {
    validatePasswords();
  }, [password1, password2])
  const validatePasswords = () => {
    if(step !== 1){
      return;
    }
    if(password1 !== password2){
      setError('Passwords do not match');
    } else if(password1 === ''){
      setError("Enter password");
    } else {
      setError("");
    }
  }
  useEffect(() => {
    if(error !== ''){
      setShow(true);
    } else {
      setShow(false);
    }
  }, [error])
  const changeStep = () => {
    if(step === 0){

    } else if(step === 1){

    } else {
      return;
    }

    setStep(step + 1);
  }

  const stepperStyle = {
    listStyleType: "square",
    color: "#C9C5E8",
    fontSize: "20px"
  }
  const stepperStyleActive = {
    listStyleType: "square",
    color: "#5845DD",
    fontSize: "20px"
  }
  const stepsText = ["Initial Info", "Password Screen", "Review"];
  return (
    <div className="container pt-5">
      <div className="position-fixed left-1 top-1">
        <ul>
          { stepsText.map(text => <li key={nanoid()} style={step === stepsText.indexOf(text)?stepperStyleActive: stepperStyle}>{text}</li>)}
        </ul>
      </div>
      <div className="text-center mb-2">
      <h1>Super Test Form</h1>
      <h3 style={{ color: "gray"}}>{stepsText[step]}</h3>

      </div>
      <Card style={{ backgroundColor: "#817ca5", color: "#fff", width: '50%', margin:"auto" }}>
        <Card.Body>
          { step === 0 && <Form1 name={name} email={email} phone={phone} country={country} handleChangeCountry={handleChangeCountry} countries={countries} handleChangeEmail={handleChangeEmail} handleChangeName={handleChangeName} handleChangePhone={handleChangePhone} />}
          { step === 1 && <Form2 password1={password1} password2={password2} handleChangePassword1={handleChangePassword1} handleChangePassword2={handleChangePassword2}/>}
          { step === 2 && <Form3 name={name} country={country} phone={phone}/>}

          <div className="d-grid gap-2">
            <Button disabled={error === ''? false : true} id="btn-start-mine" onClick={changeStep}>{step < 2?'Continue':'Done'}</Button>
          </div>
        </Card.Body>
        
      </Card>
      <ToastContainer position="top-end" className="m-3">
          <Toast show={show} animation={true} bg="danger">
            <Toast.Header closeButton={false}>
              <strong className="me-auto fs-5">Error</strong>
            </Toast.Header>
            <Toast.Body className="text-white fs-5">{error}</Toast.Body>
          </Toast>
          </ToastContainer>
    </div>
  );
}

export default App;
