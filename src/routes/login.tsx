import { Client, OpenAPI } from "@lets-science/letsscience-client";
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
import { lowerFirst } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useClient } from "../hooks/useClient";

function Signup() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isregistered, setIsRegistered] = useState(false);

  let client = useClient();

  const onLogin = () => {
    const login = async () => {
      client.user
        .postApiLogin({
          email: email,
          password: password,
        })
        .then((resp) => {
          localStorage.setItem('token', resp);
          setUser(resp);
          setIsRegistered(true);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    login();
  };

  //   useEffect(() => {
  //     const login = async () => {
  //       let result = await client.user.postApiRegister({
  //         email: "",
  //         password: "",
  //         name: "",
  //         avatar_seed: "",
  //         is_guest: false,
  //       });
  //       setUser(result);
  //     };
  //     login();
  //   }, []);
  if (isregistered) {
    return <Navigate to="/" />;
  }
  return (
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
        Do not have an account yet?{" "}
        <Anchor<"a"> href="/sign-up" size="sm">
          Sign up
        </Anchor>
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
  );
}

export default Signup;
