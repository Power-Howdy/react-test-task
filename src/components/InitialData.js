//username, email,  phone number, country
import React from 'react'
import { Form } from 'react-bootstrap'
import { nanoid } from 'nanoid'

export default function InitialData({error, username, email, phone, country, countries, handleChangeName, handleChangeEmail, handleChangeCountry, handleChangePhone}) {
  return (
    <div>
      <Form.Group className="mb-3" controlId="username.ControlInput1">
        <Form.Label>User Name</Form.Label>
        <Form.Control size='lg' value={username} onChange={handleChangeName} type="text" placeholder="User Name" />
        { error.name !== '' && <span className="error">{error.name}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control size='lg' value={email} onChange={handleChangeEmail} type="email" placeholder="name@example.com" />
        { error.email !== '' && <span className="error">{error.email}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone.ControlInput1">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control size='lg' value={phone} onChange={handleChangePhone} type="tel" placeholder="Phone number" />
        { error.phone !== '' && <span className="error">{error.phone}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="country.ControlInput1">
        <Form.Label>Country</Form.Label>
        <Form.Select size='lg' value={country} onChange={handleChangeCountry} aria-label="Default select example">
            <option>Select Country</option>
            { countries.map(item => <option key={nanoid()} value={item.value}>{item.label}</option>)}
        </Form.Select>
        { error.country !== '' && <span className="error">{error.country}</span>}
      </Form.Group>
    </div>
  )
}
