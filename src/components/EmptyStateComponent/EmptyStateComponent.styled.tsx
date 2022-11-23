import styled from "styled-components";
import { BsInfoCircle } from "react-icons/bs";

export const StyledEmptyStateComponent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledIcon = styled(BsInfoCircle)`
  font-size: 1.5rem;
`;

export const StyledText = styled.p`
  margin-left: 1rem;
`;
