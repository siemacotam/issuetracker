import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 0;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;
