import { Issue } from "src/global";
import * as S from "./IssueElement.styled";

interface IssueElementProps {
  data: Issue;
}

export const IssueElement = ({ data }: IssueElementProps) => {
  const { title, description, status } = data;

  return (
    <S.Container>
      <S.StyledTitle>{title}</S.StyledTitle>
      <S.StyledDescription>{description}</S.StyledDescription>
      <S.StyledStatus />
    </S.Container>
  );
};
