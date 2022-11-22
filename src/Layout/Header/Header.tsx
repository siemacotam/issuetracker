import { AddIssueButton, Logo } from "src/components";
import { StyledHeader } from "./Header.styled";

export const Header = () => (
  <StyledHeader>
    <Logo />
    <AddIssueButton />
  </StyledHeader>
);
