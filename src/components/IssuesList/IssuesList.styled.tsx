import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  min-height: 50vh;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;
