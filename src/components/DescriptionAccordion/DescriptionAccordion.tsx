import { useState } from "react";
import { DescriptionAccordionProps } from "./DescriptionAccordion.types";
import * as S from "./DescriptionAccordion.styled";

export const DescriptionAccordion = ({
  description,
}: DescriptionAccordionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);

  const manageAccordion = () => setIsOpen(!isOpen);

  const accordionLabel = isOpen ? "Hide description" : "Show description";

  return (
    <S.Container>
      <S.StyledTitleContainer onClick={() => manageAccordion()}>
        <S.AccordionTitle>{accordionLabel}</S.AccordionTitle>
        {isOpen ? <S.StyledCloseIcon /> : <S.StyledOpenIcon />}
      </S.StyledTitleContainer>
      <S.AccordionBody active={isOpen}>
        <S.AccordionContent>{description}</S.AccordionContent>
      </S.AccordionBody>
    </S.Container>
  );
};
