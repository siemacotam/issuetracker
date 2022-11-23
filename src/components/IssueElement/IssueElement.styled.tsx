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
  min-height: 150px;
  border-radius: 5px;
  align-items: center;
  position: relative;
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.title};
  margin-bottom: 10px;
`;

export const StyledDescription = styled.span`
  font-size: 0.8rem;
`;

export const StyledStatus = styled.select``;
