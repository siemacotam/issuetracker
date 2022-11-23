import { useAppContext } from "src/hooks";
import { EmptyStateComponent } from "../EmptyStateComponent";
import { IssueElement } from "../IssueElement";
import * as S from "./IssuesList.styled";

export const IssuesList = () => {
  const { state } = useAppContext();

  const filteredData =
    state.status === ""
      ? state.issues
      : state.issues.filter((issue) => issue.status === state.status);

  const showData = filteredData.length > 0;

  return (
    <S.Container>
      {showData ? (
        filteredData.map((issue) => (
          <IssueElement key={issue.title} data={issue} />
        ))
      ) : (
        <EmptyStateComponent />
      )}
    </S.Container>
  );
};
