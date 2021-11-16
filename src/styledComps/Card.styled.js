import styled from "styled-components";

export const Card = styled.div`
  width: 30%;
  max-height: auto;
  margin: 3rem auto;
  box-shadow: 0 0 0 3px #111;
  padding-bottom: 10px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 70%;
  }
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

export const CardFooter = styled.div`
  font-size: 18px;
  text-align: center;
  margin: 0 auto;
`;

export const CardFixed = styled(Card)`
  position: fixed;
  width: 40%;
  height: 500px;
  max-height: 800px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 4;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 80%;
  }
`;

export const CardBody = styled.div`
  padding: 0 15px;
  margin-top: 20px;
  max-height: 70%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;
