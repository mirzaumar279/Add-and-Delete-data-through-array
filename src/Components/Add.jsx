import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function Add() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  let history = useNavigate();
  const handleSubmit = (val) => {
    val.preventDefault();
    const ids = uuid();
    let uniqueId = ids.slice(0, 8);
    let a = name;
    let b = email;
    let c = address;
    let d = phone;
    Employees.push({ id: uniqueId, name: a, email: b, address: c, phone: d });
    history("/");
  };
  return (
    <div>
    <h1 className="head">Add Data</h1>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="nb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            onChange={(val) => setname(val.target.value)}
          ></Form.Control>
        </Form.Group>
        <br />
        <Form.Group className="nb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Email"
            required
            onChange={(val) => setemail(val.target.value)}
          ></Form.Control>
        </Form.Group>
        <br />
        <Form.Group className="nb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Address"
            required
            onChange={(val) => setaddress(val.target.value)}
          ></Form.Control>
        </Form.Group>
        <br />
        <Form.Group className="nb-3" controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter Phone"
            required
            onChange={(val) => setphone(val.target.value)}
          ></Form.Control>
        </Form.Group>
        <br />
        <Button onClick={(val) => handleSubmit(val)} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Add;
