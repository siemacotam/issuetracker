import { statuses } from "src/AppContext/AppContext.const";
import { Statuses } from "src/AppContext/AppContext.types";
import styled from "styled-components";
import { BsHandThumbsUp } from "react-icons/bs";

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
  transition: 0.5s ease;
  &:hover {
    background-color: #eee;
  }
  @media (max-width: 768px) {
    margin-top: 15px;
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

export const StyledClosedInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 112px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const StyledClosedIcon = styled(BsHandThumbsUp)`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const StyledSpan = styled.span``;
