import { useState } from "react";

// import { useLogin } from "./useLogin";
import SpinnerMini from "../../../ui/SpinnerMini";
import Form from "../../../ui/Form";
import FormRowVertical from "../../../ui/FormRowVertical";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";

function LoginForm() {
  const { login, isLogin } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }
  /*   useEffect(() => { //! we can use onSetled Method in react query
    if (error) {
      setEmail('');
      setPassword('');
    }
  }, [error]); */

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          disabled={isLogin}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          disabled={isLogin}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button disabled={isLogin}>
          {!isLogin ? "Login" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
