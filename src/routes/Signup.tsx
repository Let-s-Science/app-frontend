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
  Center,
} from "@mantine/core";
import { useState } from "react";
import { Navigate } from "react-router";
import Jazzicon from "react-jazzicon";
import { useClient } from "../hooks/useClient";
import { showNotification } from "@mantine/notifications";
import { IconAlertCircle, IconCircleCheck } from "@tabler/icons";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar_seed, setAvatar_Seed] = useState("");
  const [isregistered, setIsRegistered] = useState(false);

  const client = useClient();

  const onSignUp = () => {
    const signup = async () => {
      client.user
        .postApiRegister({
          email: email,
          password: password,
          name: name,
          avatar_seed: avatar_seed,
          is_guest: false,
        })
        .then(() => {
          showNotification({
            title: "Yeah! Welcome on board!",
            message: "Please check your Mails and verify your Email-Address",
            autoClose: false,
            color: "green",
            icon: <IconCircleCheck />,
            radius: "md",
          });
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
    signup();
  };
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
        Welcome!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do you have an account yet? <Link to="/login">Log in</Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Name"
          placeholder="Your Name"
          required
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
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

        <Center className="centeredAvatar">
          <Jazzicon diameter={90} seed={parseInt(avatar_seed)} />
        </Center>
        <Center className="centeredAvatar">
          <Button
            className="avatarButton"
            onClick={() => {
              const result = Math.floor(Math.random() * 10000);
              setAvatar_Seed(result + "");
            }}
          >
            Change Avatar
          </Button>
        </Center>

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
        <Button fullWidth mt="xl" onClick={onSignUp}>
          Sign up
        </Button>
      </Paper>
    </Container>
  );
};

export default Signup;
