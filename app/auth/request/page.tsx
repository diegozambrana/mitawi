import { RequestForm } from "@/components/auth/RequestForm";
import { Title } from "@mantine/core";

const AuthRequestPage = () => {
  return (
    <div>
      <Title style={{ textAlign: "center" }} order={2}>
        Request Auth
      </Title>
      <RequestForm />
    </div>
  );
};

export default AuthRequestPage;
