import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledHeader } from "../styledComps/Header.styled";
import { Flex } from "../styledComps/Flex.styled";
import { Button } from "../styledComps/Button.styled";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [loggedIn, setLoggenIn] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!!!user) {
      setLoggenIn(false);
    } else {
      setLoggenIn(true);
    }
  }, [user]);

  const handleClick = () => {
    setLoggenIn(!loggedIn);
    logout()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <StyledHeader>
        <Flex className="container">
          <h1>INSTA🔥</h1>
          {loggedIn ? (
            <Button onClick={handleClick}>Logout</Button>
          ) : (
            <Button>
              <Link className="link-white" to="/">
                Login
              </Link>
            </Button>
          )}
        </Flex>
      </StyledHeader>
    </>
  );
};

export default Header;
