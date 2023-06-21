//password confirmation
import React from 'react'
import { Form } from "react-bootstrap"

export default function PasswordReference({ error, data, handleChange }) {
  return (
    <div>
      <Form.Group className="mb-3" controlId="password.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={data.password1} onChange={handleChange('password1')} size='lg' placeholder="User Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={data.password2} onChange={handleChange('password2')} size='lg' placeholder="User Name" />
      </Form.Group>
        { error.password !== '' && <span className='error'>{error.password}</span>}
    </div>
  )
}
