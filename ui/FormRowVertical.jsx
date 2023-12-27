import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 0;
  font-size: 14px;
`;

const Label = styled.label`
  font-weight: 600;
`;

const Error = styled.span`
  color: var(--color-red-700);
`;

function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
