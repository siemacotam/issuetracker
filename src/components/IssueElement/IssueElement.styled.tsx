import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 15px;
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.title};
  margin-right: 20px;
`;

export const StyledDescription = styled.span`
  flex-grow: 1;
  font-size: 0.8rem;
`;

export const StyledStatus = styled.select``;
