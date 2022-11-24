import { useState } from "react";
import { StatusSelect } from "../StatusSelect";
import { Success } from "../Success";
import * as S from "./IssueElement.styled";
import { IssueElementProps } from "./IssueElement.types";

export const IssueElement = ({ data }: IssueElementProps): JSX.Element => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { title, description, status, added, id } = data;

  return (
    <S.Container status={status}>
      <S.IssueTextContainer>
        <S.StyledTitle>{title}</S.StyledTitle>
        <S.StyledDescription>{description}</S.StyledDescription>
        <S.StyledSpan>ID : {id}</S.StyledSpan>
        <S.StyledSpan>Added : {added}</S.StyledSpan>
      </S.IssueTextContainer>
      <StatusSelect data={data} setShowSuccess={setShowSuccess} />
      {showSuccess && <Success />}
    </S.Container>
  );
};
