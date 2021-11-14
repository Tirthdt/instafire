import styled from "styled-components";

export const Card = styled.div`
  width: 30%;
  max-height: auto;
  margin: 3rem auto;
  box-shadow: 0 0 0 3px #111;
  padding-bottom: 10px;
`;

export const CardHeader = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  text-align: ${(props) => (props.left ? "left" : "center")};
  margin-bottom: ${(props) => (props.rm ? "0px" : "15px")};
  width: 100%;
  background: #1f1d36;
  color: #fff;
  padding: 20px 10px;

  & p {
    font-size: 14px;
    color: #e4e4e4;
  }

  & .userName {
    opacity: 0.8;
  }
`;

export const CardFooter = styled.p`
  font-size: 14px;
  text-align: center;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
