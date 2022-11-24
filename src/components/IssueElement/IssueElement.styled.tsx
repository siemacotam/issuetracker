import { statuses } from "src/AppContext/AppContext.const";
import { Statuses } from "src/AppContext/AppContext.types";
import styled from "styled-components";

interface ContainerProps {
  status: Statuses;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${({ theme, status }) => {
    switch (status) {
      case statuses.open:
        return theme.colors.openBackground;
      case statuses.pending:
        return theme.colors.pendingBackground;
      case statuses.close:
        return theme.colors.closedBackground;
      default:
        return "";
    }
  }};
  padding: 15px;
  display: flex;
  min-height: 135px;
  border-radius: 5px;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IssueTextContainer = styled.div`
  flex-grow: 1;
  margin-right: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  padding: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 1.1rem;
  margin-bottom: 10px;
  word-break: break-all;
`;

export const StyledDescription = styled.p`
  font-size: 0.8rem;
  word-break: break-all;
  margin-bottom: 25px;
`;

export const StyledSpan = styled.span`
  font-size: 0.7rem;
`;
