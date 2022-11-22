import { useFormik, FormikProvider } from "formik";
import { addIssue } from "src/AppContext/Reducers/mainReducer.helpers";
import { Issue } from "src/global";
import { useAppContext } from "src/hooks";
import { IssueButton } from "../IssueButton";
import { initialValues, validationSchema } from "./AddIssue.const";
import * as S from "./AddIssue.styled";
import { AddIssueForm } from "./AddIssueForm";

interface AddIssueProps {
  handleClick: () => void;
}

export const AddIssue = ({ handleClick }: AddIssueProps) => {
  const { dispatch, state } = useAppContext();

  const formik = useFormik<Issue>({
    initialValues,
    validationSchema,
    onSubmit: () => {},
  });

  const { title, description } = formik.values;

  const handleSubmit = async () => {
    if (!title || !description) {
      console.log("uzupelnij dane");
      return;
    }
    if (state.issues.some((issue) => issue.title === title)) {
      console.log("jest juz taki title");
      return;
    }
    dispatch(addIssue(formik.values));
    formik.resetForm();
    handleClick();
  };

  return (
    <S.Container>
      <FormikProvider value={formik}>
        <S.StyledHeader>
          <S.StyledTitle>Add Issue</S.StyledTitle>
          <IssueButton handleClick={handleClick} />
        </S.StyledHeader>
        <AddIssueForm />
      </FormikProvider>
      <S.StyledButton onClick={handleSubmit}>
        <S.StyledIcon />
        Save and go back
      </S.StyledButton>
    </S.Container>
  );
};
