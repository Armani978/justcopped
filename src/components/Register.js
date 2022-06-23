import React, {useState}  from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useAuthContext();
    let navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await signUp(email, password);
        navigate("/login");
      } catch (err) {
        setError(err.message);
      }
    };
  
    return (
      <>
        <div className="p-4 box">
          <h2 className="mb-3">Create An Account</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Sign up
              </Button>
            </div>
          </Form>
        </div>
        <div className="p-4 box mt-3 text-center">
          Already have an account? Click <Link to="/login">here</Link> to login.
        </div>
      </>
    );
  };
  
  export default Register;