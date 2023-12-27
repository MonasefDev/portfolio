import styled from "styled-components";
import Heading from "../../../ui/Heading";
import LoginForm from "./LoginForm";

const LoginLayout = styled.main`
  display: grid;
  grid-template-columns: 480px;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
`;

function Login() {
  return (
    <LoginLayout>
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
