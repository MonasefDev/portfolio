import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  padding: 12px 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
  }
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: start;
    gap: 0;
  }
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  @media only screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;

const Error = styled.span`
  font-size: 12px;
  color: var(--color-red-700);
`;

function FormRow({ children, error, label }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
