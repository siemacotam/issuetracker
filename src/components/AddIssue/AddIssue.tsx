import { useFormik, FormikProvider } from "formik";
import { useState } from "react";
import cryptoRandomString from "crypto-random-string";
import { addIssue } from "src/AppContext/Reducers/mainReducer.helpers";
import { Issue } from "src/global";
import { useAppContext } from "src/hooks";
import { AlertMessage } from "../AlertMessage";
import { IssueButton } from "../IssueButton";
import { initialValues, validationSchema } from "./AddIssue.const";
import * as S from "./AddIssue.styled";
import { AddIssueForm } from "./AddIssueForm";

interface AddIssueProps {
  handleClick: () => void;
}

export const AddIssue = ({ handleClick }: AddIssueProps) => {
  const [error, setError] = useState("");
  const { dispatch, state } = useAppContext();

  const formik = useFormik<Issue>({
    initialValues,
    validationSchema,
    onSubmit: () => {},
  });

  const { title, description } = formik.values;

  const handleSubmit = async () => {
    setError("");
    if (!title || !description) {
      setError("Both values - title and description, needs to be filled");
      return;
    }
    if (state.issues.some((issue) => issue.title === title)) {
      setError("There is already issue with that title. Please change it");
      return;
    }

    const issueData = {
      ...formik.values,
      added: new Date().toLocaleString(),
      id: `IT-${cryptoRandomString({ length: 6 })}`,
    };

    dispatch(addIssue(issueData));
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
        {error.length > 0 && <AlertMessage text={error} />}
        <AddIssueForm />
      </FormikProvider>
      <S.StyledButton onClick={handleSubmit}>
        <S.StyledIcon />
        Save and go back
      </S.StyledButton>
    </S.Container>
  );
};
