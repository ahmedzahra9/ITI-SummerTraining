import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function ContactUs() {
  const [passwordInput, setPassword] = useState("");
  const [error, setError] = useState({});
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    console.log(error);
  });
  const submitHandler = (e) => {
    e.preventDefault();
    if (passwordInput.length < 7 ) {
      setError({
        ...error,
        password: "password must be greater than 5",
      });
    }
    console.log(error);
  };
  return (
    <div className="bg-dark p-5 text-center border-top">
      <div className="container col-md-6">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Full Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              defaultValue={passwordInput}
              onChange={getPassword}
            />
            {error.password && (
              <Form.Text className="text-muted">
                Your Password must be greater than 7
              </Form.Text>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
