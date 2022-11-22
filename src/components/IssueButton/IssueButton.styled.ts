import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 0;
  cursor: pointer;
  padding-right: 15px;
  font-size: 1.5rem;
`;
