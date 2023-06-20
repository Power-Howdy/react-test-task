//password confirmation
import React from 'react'
import { Form } from "react-bootstrap"

export default function Form2({ password1, password2, handleChangePassword1, handleChangePassword2 }) {
  return (
    <div>
      <Form.Group className="mb-3" controlId="password.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password1} onChange={handleChangePassword1} size='lg' placeholder="User Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password2} onChange={handleChangePassword2} size='lg' placeholder="User Name" />
      </Form.Group>
    </div>
  )
}
