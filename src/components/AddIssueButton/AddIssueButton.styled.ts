import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 0px ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;
