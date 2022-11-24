import styled from "styled-components";
import { lighten } from "polished";

export const StyledInput = styled.input`
  font-size: 18px;
  padding: 10px;
  background: ${({ theme }) => lighten(0.1, theme.colors.background)};
  border: none;
  border-radius: 3px;
`;

export const StyledTextarea = styled.textarea`
  font-size: 18px;
  padding: 10px;
  background: ${({ theme }) => lighten(0.1, theme.colors.background)};
  border: none;
  border-radius: 3px;
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
