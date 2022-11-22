import { useAppContext } from "src/hooks";
import { EmptyStateComponent } from "../EmptyStateComponent";
import { TableRow } from "./components";
import * as S from "./IssuesTable.styled";

export const IssuesTable = () => {
  const { state } = useAppContext();

  const content =
    state.issues.length > 0 ? (
      state.issues.map((issue) => <TableRow data={issue} />)
    ) : (
      <EmptyStateComponent />
    );

  return (
    <S.StyledTable>
      <thead>
        <tr>
          <th colSpan={2}>The table header</th>
        </tr>
      </thead>
      <tbody>{content}</tbody>
    </S.StyledTable>
  );
};
