import { StyledButton } from "./IssueButton.styled";
import { GrAddCircle } from "react-icons/gr";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IssueButtonProps } from "./IssueButton.types";

export const IssueButton = ({
  handleClick,
  open,
}: IssueButtonProps): JSX.Element => (
  <StyledButton onClick={handleClick}>
    {open ? <GrAddCircle /> : <AiOutlineCloseCircle />}
  </StyledButton>
);
