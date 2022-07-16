import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import axios from "axios";


function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "https://nodejs-mongodb-auth-app-login.herokuapp.com/register",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
    .then((result) => {
      console.log(result);
      setRegister(true);
    
    })
    .catch((error) => {console.log(error);})
    // make a popup alert showing the "submitted" text
  }



  return (
    <div>
      <h2>Register</h2>
      <Form>
        {/* email */}
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          />
        </Form.Group>

        {/* password */}
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          />
        </Form.Group>
        <Form.Group >
          <Form.Label>Password Confirm</Form.Label>
          <Form.Control
          type="password"
          name="passwordCheck"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
          placeholder="Password Confirm"
          />
        </Form.Group>


        {/* submit button */}
        <Button  variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </Form>

      {register ? (
          <p className="text-success" mt={16}>You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
    </div>
  );
}

export default Register;
