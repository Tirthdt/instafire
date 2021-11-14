import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useDB } from "../hooks/useDB";
import { ButtonMD } from "../styledComps/Button.styled";
import { Card, CardFooter, CardHeader } from "../styledComps/Card.styled";
import { Input, FormControl } from "../styledComps/Inputs.styled";
import { Alert } from "../styledComps/Utilities";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { addData } = useDB("Users");

  const navigate = useNavigate();

  const { signup, setUser, updateDisplayName } = useAuth();

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    signup(email, password)
      .then((data) => {
        addData(name, data.user.uid);
        return updateDisplayName(name);
      })
      .then((data) => {
        setError("");
        setLoading(false);
        setUser(data);
        setName("");
        setEmail("");
        setPassword("");

        navigate("/home");
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <Card>
      <CardHeader>Signup</CardHeader>
      {error && (
        <Alert color="#630000" bg="#D8B6A4">
          {error}
        </Alert>
      )}
      {loading && <Alert>Submitting</Alert>}
      <FormControl>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        ></Input>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        ></Input>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        ></Input>
        <ButtonMD type="submit" onClick={handleClick}>
          SignUp
        </ButtonMD>
      </FormControl>
      <CardFooter>
        Already a member ? <Link to="/">Login</Link>
      </CardFooter>
    </Card>
  );
};

export default Signup;
