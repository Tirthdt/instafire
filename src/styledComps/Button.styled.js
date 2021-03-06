import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background: ${(props) => (props.secondary ? "#1f1d36" : "#b91646")};
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 25px;
  border-radius: 6px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.1s ease-in;

  &:hover {
    opacity: 0.9;
    transform: scale(1.1);
  }
`;

export const ButtonMD = styled(Button)`
  width: 70%;
  margin: 10px auto;

  &:hover {
    opactity: 0.9;
    transform: scale(1.05);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: unset;
  }
`;

export const IconButton = styled.button`
  font-size: 30px;
  padding: 5px 10px;
  background: transparent;
  border: none;
  transition: all 0.1s ease-in;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ButtonBlock = styled(ButtonMD)`
  display: block;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 80%;
  }
`;

export const ButtonFAB = styled(Button)`
  position: fixed;
  bottom: 2%;
  right: 2%;
  height: auto;
  border-radius: 50%;

  svg {
    text-align: center;
    display: inline-block;
    margin: 0 auto;
    height: 40px;
  }
`;

export const ButtonClose = styled(Button)`
  background: transparent;
  padding: 10px 5px;
  font-size: 18px;
  border-radius: 50%;
  float: right;
`;
