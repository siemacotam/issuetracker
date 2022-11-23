import { statuses } from "src/AppContext/AppContext.const";
import { Statuses } from "src/AppContext/AppContext.types";
import styled from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
  margin: 0;
`;

interface SelectLabelButtonProps {
  status: Statuses;
}

export const SelectLabelButton = styled.button<SelectLabelButtonProps>`
  padding: 0.3rem 0.5rem;
  min-width: 7rem;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: ${({ status, theme }) =>
    status === statuses.close ? theme.colors.success : "#fff"};
  border: none;
  border-radius: 5px;
  color: #111;
  align-items: center;
  justify-content: space-between;
  border: 1px solid slategrey;
  cursor: pointer;
  box-shadow: 0 1px 4px 0 #ccc;
  transition: 0.5s ease;
  &:hover {
    background-color: #eee;
  }
`;

interface DropdownProps {
  isVisible: boolean;
}

export const DropdownStyle = styled.div<DropdownProps>`
  position: absolute;
  top: 0;
  right: 0;
  max-height: ${(props) => (props.isVisible !== true ? "40px" : "40vmax")};
  min-width: 10rem;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fafafa;
  border: 1.5px solid slategrey;
  transition: max-height 0.2s ease;
  overflow: scroll;
  visibility: ${(props) => (props.isVisible !== true ? "hidden" : "visible")};
  z-index: 10;
`;

interface DropdownItemProps {
  active: boolean;
}

export const DropdownItem = styled.div<DropdownItemProps>`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0.15rem 0;
  padding: 0.3rem 0.5rem;
  font-size: 0.9rem;
  font-weight: ${(props) => (props.active ? "500" : "400")};
  color: ${(props) => (props.active ? "#166edc" : "#333")};
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover,
  :focus,
  :focus:hover {
    background-color: #166edc;
    color: #fafafa;
    outline: none;
  }
`;
