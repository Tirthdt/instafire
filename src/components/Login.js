import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonMD } from "../styledComps/Button.styled";
import { Card, CardFooter, CardHeader } from "../styledComps/Card.styled";
import { FormControl, Input } from "../styledComps/Inputs.styled";
import { Alert } from "../styledComps/Utilities";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { login, setUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    login(email, password)
      .then((data) => {
        setLoading(false);
        setError("");
        setUser(data);
        navigate("/home", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <Card>
        <CardHeader>Login</CardHeader>
        {error && (
          <Alert color="#630000" bg="#D8B6A4">
            {error}
          </Alert>
        )}
        {loading && <Alert>Submitting</Alert>}
        <FormControl>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          ></Input>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          ></Input>
          <ButtonMD onClick={handleSubmit} type="submit" w700>
            Login
          </ButtonMD>
        </FormControl>
        <CardFooter>
          New here ? <Link to="/signup">Sign Up</Link>
        </CardFooter>
      </Card>
      )
    </>
  );
};

export default Login;
