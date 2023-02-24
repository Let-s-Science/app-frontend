import { useEffect, useState } from "react";
import { User } from "@lets-science/letsscience-client";
import { useClient } from "../hooks/useClient";
import { ActionIcon, Card, Center, Paper, Stack, Title } from "@mantine/core";
import Jazzicon from "react-jazzicon";
import { StatsRing } from "../components/StatsRing";
import { berechneLevel, berechneFortschritt } from "../util";
import { IconPencil } from "@tabler/icons";
import { formatDate } from "../utils/dateFormat";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const client = useClient();

  useEffect(() => {
    const getUser = async () => {
      client.user
        .getApiUserSelf()
        .then((resp) => {
          setUser(resp);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getUser();

    return () => {};
  }, []);

  const editEmail = () => {
    //Hier muss die Backendanbindung hin
  };

  if (user === null) {
    return <>Couldn't load data</>;
  }

  return (
    <Stack>
      <Center>
        <Jazzicon diameter={90} seed={parseInt(user.avatar_seed)} />
      </Center>
      <h1>{user.name}'s Site</h1>
      <div className="informationTitle">
        E-Mail:
        <ActionIcon onClick={editEmail}>
          <IconPencil />
        </ActionIcon>
      </div>
      <div className="userInformation">{user.email}</div>
      <div className="informationTitle">Created At:</div>
      <div className="userInformation">
        {formatDate(new Date(user.created_at))}
      </div>
      <Card className="profileStats" shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
          <br />
          <Title>{user.score}</Title>
          <h3 style={{ textAlign: "center" }}>Your current Score!</h3>
        </Card.Section>
      </Card>
      <div className="profileLevel">
        <StatsRing
          data={[
            {
              label: "You are currently Level",
              stats: berechneLevel(user.score),
              progress: berechneFortschritt(user.score),
              color: "green",
              icon: "up",
            },
          ]}
        />
      </div>
    </Stack>
  );
};

export default Profile;
