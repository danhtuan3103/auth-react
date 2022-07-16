import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "https://nodejs-mongodb-auth-app-login.herokuapp.com/login",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        console.log(result);
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        window.location.href = "/free";
        setLogin(true);
      })
      .catch((error) => {
        console.log(error);
      });
    // make a popup alert showing the "submitted" text
  };

  return (
    <div>
      <h2>Register</h2>
      <Form>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
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
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        {/* submit button */}
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </Form>

      {/* display success message */}
      {login ? (
        <p className="text-success">You Are Logged in Successfully</p>
      ) : (
        <p className="text-danger">You Are Not Logged in</p>
      )}
    </div>
  );
}

export default Login;
