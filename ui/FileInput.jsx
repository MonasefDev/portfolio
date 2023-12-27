import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 16px;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 8px 12px;
    margin-right: 12px;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    cursor: pointer;
    transition:
      color 0.2s,
      background-color 0.2s;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
  @media only screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;

export default FileInput;
