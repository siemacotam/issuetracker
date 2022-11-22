import { useAppContext } from "src/hooks";
import { EmptyStateComponent } from "../EmptyStateComponent";
import { TableRow } from "./components";
import * as S from "./IssuesTable.styled";

export const IssuesTable = () => {
  const { state } = useAppContext();

  const showData = state.issues.length > 0;

  return (
    <>
      <S.StyledTable>
        <thead>
          <tr>
            <th colSpan={2}>The table header</th>
          </tr>
        </thead>
        <tbody>
          {showData &&
            state.issues.map((issue) => (
              <TableRow key={issue.title} data={issue} />
            ))}
        </tbody>
      </S.StyledTable>
      {!showData && <EmptyStateComponent />}
    </>
  );
};
