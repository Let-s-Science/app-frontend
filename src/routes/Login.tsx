import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import { useState } from "react";
import { Navigate } from "react-router";
import { showNotification } from "@mantine/notifications";
import { IconAlertCircle } from "@tabler/icons";
import { useClient } from "../hooks/useClient";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isregistered, setIsRegistered] = useState(false);

  const client = useClient();

  const onLogin = () => {
    const login = async () => {
      client.user
        .postApiLogin({
          email: email,
          password: password,
        })
        .then((resp) => {
          localStorage.setItem("token", resp);
          setIsRegistered(true);
        })
        .catch((e) => {
          console.log(e);
          showNotification({
            title: "There is something wrong!",
            message: "Please check your data and try again later!",
            autoClose: 5000,
            color: "red",
            icon: <IconAlertCircle />,
            radius: "md",
            disallowClose: true,
          });
        });
    };
    login();
  };

  if (isregistered) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Welcome back!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet? <Link to="/sign-up">Sign up</Link>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput
            label="Email"
            placeholder="yourname@domain.com"
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Group position="apart" mt="lg">
            <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
            <Anchor<"a">
              onClick={(event) => event.preventDefault()}
              href="#"
              size="sm"
            >
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" onClick={onLogin}>
            Log in
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default Signup;
