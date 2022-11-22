import styled from "styled-components";

export const StyledMain = styled.main`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
