import styled from "styled-components";

export const ManagementPanel = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0 10px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;
