import styled from "styled-components";
import { AiOutlineDoubleLeft } from "react-icons/ai";

export const Container = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const StyledTitle = styled.p`
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 1.5rem;
`;

export const StyledButton = styled.button`
  margin: 20px;
  border: 0;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const StyledIcon = styled(AiOutlineDoubleLeft)`
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.white};
`;
