//username, email,  phone number, country
import React from 'react'
import { Form } from 'react-bootstrap'
import { nanoid } from 'nanoid'

export default function Form1({username, email, phone, country, countries, handleChangeName, handleChangeEmail, handleChangeCountry, handleChangePhone}) {
  return (
    <div>
      <Form.Group className="mb-3" controlId="username.ControlInput1">
        <Form.Label>User Name</Form.Label>
        <Form.Control size='lg' value={username} onChange={handleChangeName} type="text" placeholder="User Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control size='lg' value={email} onChange={handleChangeEmail} type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone.ControlInput1">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control size='lg' value={phone} onChange={handleChangePhone} type="tel" placeholder="Phone number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="country.ControlInput1">
        <Form.Label>Country</Form.Label>
        <Form.Select size='lg' value={country} onChange={handleChangeCountry} aria-label="Default select example">
            <option>Select Country</option>
            { countries.map(item => <option key={nanoid()} value={item.value}>{item.label}</option>)}
        </Form.Select>
      </Form.Group>
    </div>
  )
}
