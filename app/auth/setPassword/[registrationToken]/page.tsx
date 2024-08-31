import { SetPasswordForm } from "@/components/auth/SetPasswordForm";
import { Title } from "@mantine/core";

const setPasswordPage = ({
  params,
}: {
  params: { registrationToken: string };
}) => {
  console.log(params);
  return (
    <div>
      <Title style={{ textAlign: "center" }} order={2}>
        Request Auth
      </Title>
      <SetPasswordForm />
    </div>
  );
};

export default setPasswordPage;
