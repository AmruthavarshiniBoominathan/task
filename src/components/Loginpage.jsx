import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import './Login.css';

export default function Login() {
  return (
    <div className="supermarket">
      <Container className="login-container">
        <Row></Row>
        <Col md={8} xs={8} lg={12}>
          <div className="spacer">
            <h1 className="welcome"><strong>let's</strong></h1>
            <span className="brand">GROCIFY</span>
          </div>
          <br></br>
          <div className="login-card">
            <Card.Body>
              <div className="login-form">
                <h1 className="pwd">LOGIN</h1>
                <div className="form-group">
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address </Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password </Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <p className="small">
                        <a href="#!" className="forgot-password">Forgot password?</a>
                      </p>
                    </Form.Group>
                    <div className="login-button">
                      <Button variant="primary" type="submit">
                        Login
                      </Button>
                    </div>
                  </Form>
                  <div className="signup-link">
                    <p>
                      Don't have an account?{" "}
                      <a href="{''}" className="signup">Sign Up</a>
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </div>
        </Col>
      </Container>
    </div>
  );
}
