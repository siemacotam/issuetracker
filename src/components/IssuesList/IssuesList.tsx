import { useAppContext } from "src/hooks";
import { EmptyStateComponent } from "../EmptyStateComponent";
import { IssueElement } from "../IssueElement";
import * as S from "./IssuesList.styled";

export const IssuesList = () => {
  const { state } = useAppContext();

  const showData = state.issues.length > 0;

  return (
    <S.Container>
      {showData &&
        state.issues.map((issue) => (
          <IssueElement key={issue.title} data={issue} />
        ))}
      {!showData && <EmptyStateComponent />}
    </S.Container>
  );
};
