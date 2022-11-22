import styled from "styled-components";

export const StyledInput = styled.input`
  font-size: 18px;
  padding: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.title};
`;
