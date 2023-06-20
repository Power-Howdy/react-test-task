// display values from the fields:,  username,  phone,  country
import React from 'react'
import { Row, Col } from "react-bootstrap"
export default function Form3({ name, phone, country }) {
  return (
    <div className='fs-5 m-3'>
      <Row>
        <Col span={2}>User Name</Col>
        <Col span={10}>{name}</Col>
      </Row>
      <Row>
        <Col span={2}>Phone Number</Col>
        <Col span={10}>{phone}</Col>
      </Row>
      <Row>
        <Col span={2}>Country</Col>
        <Col span={10}>{country}</Col>
      </Row>
    </div>
  )
}
