import styled from "styled-components";

export const Anchor = styled.a`
  text-decoration: none;
  color: ${(props) => (props.primary ? "#fff" : "black")};
`;

export const Alert = styled.p`
  text-align: center;
  width: 80%;
  margin: 5px auto;
  padding: 5px;
  border: 2px solid ${(props) => props.color};
  border-radius: 5px;
  color: ${(props) => props.color};
  background: ${(props) => props.bg};
`;

export const Image = styled.img`
  max-height: 300px;
  height: 300px;
  width: auto;
  max-width: 100%;
  display: block;
  object-fit: cover;
`;

export const Caption = styled.p`
  font-size: 18px;
  margin: 5px 0;
  font-weight: bold;
`;

export const ImageBlock = styled(Image)`
  display: block;
  margin: 0 auto;
  width: 100%;
  object-fit: fill;
`;

export const Loading = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100vw;
  background: #1f1d36;
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ProgressBar = styled.div`
  height: 5px;
  background: #b91646;
`;
