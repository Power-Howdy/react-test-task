import React, { useEffect, useState, useMemo } from "react";
import './App.css';
import { Button, Card, Toast, ToastContainer } from 'react-bootstrap';
import InitialData from './components/InitialData';
import PasswordReference from './components/PasswordReference';
import Review from './components/Review';
import validator from 'validator';
import countryList from 'react-select-country-list';
import { nanoid } from "nanoid";

function App() {
  const countries = useMemo(() => countryList().getData(), []);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({
    name: 'Ener name, please',
    email: 'Enter email, please',
    password: 'Enter password, please',
    phone: 'Enter phone number, please',
    country: 'Select your country, please.'
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isError, setIsError] = useState(true);
  const handleChangeName = (event) => { setName(event.target.value); };
  const handleChangeEmail = (event) => { setEmail(event.target.value); };
  const handleChangePhone = (event) => { setPhone(event.target.value); };
  const handleChangePassword2 = (event) => { setPassword2(event.target.value); };
  const handleChangePassword1 = (event) => { setPassword1(event.target.value); };
  const handleChangeCountry = (event) => { setCountry(event.target.value); };

  const validateForm1 = () => {
    if (name === '') {
      setErrors({ ...errors, name: 'Enter Name please' })
      return;
    } else {
      setErrors({ ...errors, name: '' })
    }
    if (validator.isEmail(email) !== true) { 
      setErrors({ ...errors, email: 'Email is not valid' }); 
      return;
    } else {
      setErrors({ ...errors, email: '' });
    }
    if(validator.isMobilePhone(phone) !== true) {
      setErrors({ ...errors, phone: 'Phone number is not valid' });
      return;
     } else {
       setErrors({ ...errors, phone: '' });
     }

    if (country === ''){
      setErrors({ ...errors, country: 'Please select your country.' })
      return;
    } else {
      setErrors({ ...errors, country: '' });
    } 
    return;
  };

  useEffect(() => {
    console.log(errors);

    if (errors.name !== '' || errors.email !== '' || errors.phone !== '' || errors.country !== '' || errors.password !== '') {
      console.log(errors);
      setIsError(true);
    }
  }, [errors.name, errors.phone, errors.email, errors.country, errors.password]);
  useEffect(() => {
    validateForm1();
  }, [name, email, country, phone]);

  useEffect(() => {
    validatePasswords();
  }, [password1, password2]);
  const validatePasswords = () => {
    if (step !== 1) {
      return;
    }
    if (password1 !== password2) {
      setErrors({ ...errors, password: 'Passwords do not match' });
    } else if (password1 === '') {
      setErrors({ ...errors, password: 'Enter password' });
    } else {
      setErrors({ ...errors, password: '' });
    }
  };



  const changeStep = () => {
    if (step === 2) {
      setStep(0);
    } else {
      setStep(step + 1);
    }

  };

  const stepperStyle = {
    listStyleType: "square",
    color: "#C9C5E8",
    fontSize: "20px"
  };
  const stepperStyleActive = {
    listStyleType: "square",
    color: "#5845DD",
    fontSize: "20px"
  };
  const stepsText = ["Initial Info", "Password Screen", "Review"];
  return (
    <div className="container pt-5">
      <div className="position-fixed left-1 top-1">
        <ul>
          {stepsText.map(text => <li key={nanoid()} style={step === stepsText.indexOf(text) ? stepperStyleActive : stepperStyle}>{text}</li>)}
        </ul>
      </div>
      <div className="text-center mb-2">
        <h1>Super Test Form</h1>
        <h3 style={{ color: "gray" }}>{stepsText[step]}</h3>

      </div>
      <Card style={{ backgroundColor: "#817ca5", color: "#fff", width: '50%', margin: "auto" }}>
        <Card.Body>
          {step === 0 && <InitialData error={errors} name={name} email={email} phone={phone} country={country} handleChangeCountry={handleChangeCountry} countries={countries} handleChangeEmail={handleChangeEmail} handleChangeName={handleChangeName} handleChangePhone={handleChangePhone} />}
          {step === 1 && <PasswordReference error={errors} password1={password1} password2={password2} handleChangePassword1={handleChangePassword1} handleChangePassword2={handleChangePassword2} />}
          {step === 2 && <Review name={name} country={country} phone={phone} />}

          <div className="d-grid gap-2">
            <Button disabled={isError} id="btn-start-mine" onClick={changeStep}>{step < 2 ? 'Continue' : 'Done'}</Button>
          </div>
        </Card.Body>

      </Card>
      {/* <ToastContainer position="top-end" className="m-3">
          <Toast show={show} animation={true} bg="danger">
            <Toast.Header closeButton={false}>
              <strong className="me-auto fs-5">Error</strong>
            </Toast.Header>
            <Toast.Body className="text-white fs-5">{error}</Toast.Body>
          </Toast>
          </ToastContainer> */}
    </div>
  );
}

export default App;
