import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 24px 40px;

      /* Box */
      /* background-color: var(--color-grey-0); */
      /* border: 1px solid var(--color-grey-100); */
      border-radius: 8px;
      width: 100%;
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
