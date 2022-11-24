import { useState } from "react";
import { StatusSelect, Success, DescriptionAccordion } from "src/components";
import * as S from "./IssueElement.styled";
import { IssueElementProps } from "./IssueElement.types";

export const IssueElement = ({ data }: IssueElementProps): JSX.Element => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { title, description, status, added, id } = data;

  return (
    <S.Container status={status}>
      <S.IssueTextContainer>
        <S.StyledTitle>{title}</S.StyledTitle>
        <DescriptionAccordion description={description} />
        <S.IssueElementFooter>
          <S.StyledSpan>ID : {id}</S.StyledSpan>
          <S.StyledSpan>Added : {added}</S.StyledSpan>
        </S.IssueElementFooter>
      </S.IssueTextContainer>
      <StatusSelect data={data} setShowSuccess={setShowSuccess} />
      {showSuccess && <Success />}
    </S.Container>
  );
};
