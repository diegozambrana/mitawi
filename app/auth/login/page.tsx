import { LoginForm } from "@/components/auth/LoginForm";
import { Title } from "@mantine/core";

const LoginPage = () => {
  return (
    <div>
      <Title style={{ textAlign: "center" }} order={2}>
        Login
      </Title>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
