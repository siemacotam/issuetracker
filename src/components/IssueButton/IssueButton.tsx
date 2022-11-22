import { StyledButton } from "./IssueButton.styled";
import * as S from "./IssueButton.styled";
import { GrAddCircle } from "react-icons/gr";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface IssueButtonProps {
  handleClick: () => void;
  open?: boolean;
}

export const IssueButton = ({ handleClick, open }: IssueButtonProps) => (
  <StyledButton onClick={handleClick}>
    {open ? <GrAddCircle /> : <AiOutlineCloseCircle />}
  </StyledButton>
);
