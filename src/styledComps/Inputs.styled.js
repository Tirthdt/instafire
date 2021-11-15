import styled from "styled-components";

export const FormControl = styled.div`
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
    display: block;
    text-align: left:
    font-size: 20px;
`;

export const Input = styled.input`
  width: 70%;
  margin: 10px auto;
  display: block;
  font-size: 16px;
  padding: 0px 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid;
  margin-bottom: 10px;
  font-family: "Heebo", sans-serif;
`;

export const InputFixed = styled(Input)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 90%;
`;
