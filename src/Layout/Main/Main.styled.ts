import styled from "styled-components";

interface ContainerProps {
  closed?: boolean;
}

export const StyledMain = styled.main`
  min-height: calc(100vh - 70px);
  background-color: ${({ theme }) => theme.colors.background};
`;

export const MainContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 0;
  display: flex;
`;

export const TableContainer = styled.div<ContainerProps>`
  transform: translate(${(props) => (props.closed ? "-100vw, 0" : "0, 0")});
  width: ${(props) => (props.closed ? "0" : "100%")};
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FormContainer = styled.div<ContainerProps>`
  transform: translate(${(props) => (props.closed ? "100vw, 0" : "0, 0")});
  width: ${(props) => (props.closed ? "0" : "100%")};
  transition: 0.5s;
`;
