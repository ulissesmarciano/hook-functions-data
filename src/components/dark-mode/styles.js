import styled from "styled-components";

export const ToggleContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transition: all 0.5s ease;
`;

export const Button = styled.button`
  background: none;
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.background};
  }
`;