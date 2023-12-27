import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 8px 12px;
  box-shadow: var(--shadow-sm);
  font-size: 14px;
  width: 80%;
  &:focus {
    border: 1px solid var(--color-brand-600);
    offset: -1px;
  }
  &::placeholder {
    color: var(--color-grey-400);
    opacity: 0.6;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
    font-size: 12px;
  }
`;

export default Input;
