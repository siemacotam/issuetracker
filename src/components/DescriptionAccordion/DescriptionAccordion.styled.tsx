import styled from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

export const Container = styled.div`
  position: relative;
`;

export const StyledCloseIcon = styled(AiOutlineArrowUp)`
  font-size: 0.9rem;
`;

export const StyledOpenIcon = styled(AiOutlineArrowDown)`
  font-size: 0.9rem;
`;

export const StyledTitleContainer = styled.div`
  display: flex;
`;

export const AccordionTitle = styled.span`
  margin-right: 10px;
  cursor: pointer;
  font-size: 0.7rem;
`;

interface AccordionBodyProps {
  active: boolean;
}

export const AccordionBody = styled.div<AccordionBodyProps>`
  display: block;
  position: relative;
  padding: 0;
  margin-top: 10px;
  height: ${({ active }) => (active ? "100%" : 0)};
  overflow: hidden;
  margin-bottom: 25px;
`;

export const AccordionContent = styled.p`
  font-size: 0.8rem;
  word-break: break-all;
`;
