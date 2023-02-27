import {
  APIQuiz,
  APIQuizQuestion,
  MultipleChoiceQuestion,
  NumericQuestion,
  QuestionType,
  TrueOrFalseQuestion,
} from "@lets-science/letsscience-client";
import {
  Badge,
  Button,
  Card,
  Center,
  createStyles,
  Group,
  Image,
  Text,
} from "@mantine/core";
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
} from "@tabler/icons";
import React from "react";
import { Fragment, useEffect, useState } from "react";
import Quiz_MultipleChoice from "../components/Quiz/Quiz_MultipleChoice";
import MultipleChoice from "../components/Quiz/Quiz_MultipleChoice";
import Quiz_Numeric from "../components/Quiz/Quiz_Numeric";
import Quiz_TrueOrFalse from "../components/Quiz/Quiz_TrueOrFalse";
import { useClient } from "../hooks/useClient";

const Quiz = () => {
  const client = useClient();
  const [quizzes, setQuizzes] = useState<APIQuiz | null>(null);
  const id = "098a8b8c-b645-11ed-8245-77a17c35e614";
  const [questionLength, setQuestionLength] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [verified, setVerified] = useState<number>(-1);

  const onCheck = (correct: boolean) => {
    if (correct) {
      setScore(score + 1);
    }
  };

  useEffect(() => {
    client.quiz.getApiQuiz(id).then((resp) => {
      setQuizzes(resp);
      // valueHandlers.append(...getCategories(resp));
    });
    // client.challenge.getApiChallengesSelf().then((resp) => {
    //   setUserChallenges(resp);
    //   valueHandlers.append("My Challenges");
    // });
    if (quizzes !== null) {
      setQuestionLength(quizzes.questions.length);
    } else {
      setQuestionLength(0);
    }
  }, []);

  const useStyles = createStyles((theme) => ({
    card: {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    },

    imageSection: {
      padding: theme.spacing.md,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
    },

    label: {
      marginBottom: theme.spacing.xs,
      lineHeight: 1,
      fontWeight: 700,
      fontSize: theme.fontSizes.xs,
      letterSpacing: -0.25,
      textTransform: "uppercase",
    },

    section: {
      padding: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
    },

    icon: {
      marginRight: 5,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[5],
    },
  }));

  const mockdata = [
    { label: "4 passengers", icon: IconUsers },
    { label: "100 km/h in 4 seconds", icon: IconGauge },
    { label: "Automatic gearbox", icon: IconManualGearbox },
    { label: "Electric", icon: IconGasStation },
  ];

  const { classes } = useStyles();
  // const features = mockdata.map((feature, index) => (
  //   <Center key={feature.label}>
  //     <feature.icon size={18} className={classes.icon} stroke={1.5} />
  //     <Text size="xs">{feature.label}</Text>
  //   </Center>
  // ));

  const renderCardQuizz = (
    item: APIQuizQuestion,
    index: number,
    length: number
  ) => {
    return (
      <React.Fragment key={index}>
        <Card withBorder radius="md" className={classes.card}>
          {/* <Card.Section className={classes.imageSection}>
            <Image src="https://i.imgur.com/ZL52Q2D.png" alt="Tesla Model S" />
          </Card.Section> */}

          <Group position="apart" mt="md">
            <div>
              <Text weight={500}>{item.question}</Text>
              <Text size="xs" color="dimmed">
                Das ist noch eine Mockup Zeile
              </Text>
            </div>
            <Badge variant="outline">
              {index + 1} / {length}
            </Badge>
          </Group>

          <Card.Section className={classes.section} mt="md">
            <Text size="sm" color="dimmed" className={classes.label}>
              Antwortmöglichkeiten
            </Text>

            <Group spacing={8} mb={-8}>
              {item.data.type === "MultipleChoice" && (
                <Quiz_MultipleChoice
                  data={item.data as MultipleChoiceQuestion}
                  verified={verified >= index}
                  onCheck={onCheck}
                />
              )}
              {item.data.type === "Numeric" && (
                <Quiz_Numeric data={item.data as NumericQuestion} />
              )}
              {item.data.type === "TrueOrFalse" && (
                <Quiz_TrueOrFalse data={item.data as TrueOrFalseQuestion} />
              )}
              {/* {item.data.map((item, index) =>
                renderAnswers(item, index, questionLength)
              )} */}
              {/* {features} */}
            </Group>
          </Card.Section>

          <Card.Section className={classes.section}>
            <Group spacing={30}>
              <div>
                <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
                  {score} / {questionLength}
                </Text>
                <Text
                  size="sm"
                  color="dimmed"
                  weight={500}
                  sx={{ lineHeight: 1 }}
                  mt={3}
                >
                  possible Points
                </Text>
              </div>

              <Button
                onClick={() => setVerified(index)}
                radius="xl"
                style={{ flex: 1 }}
              >
                Check
              </Button>
              {/* Mantine Disabled button wenn noch nichts angeklicked is */}
            </Group>
          </Card.Section>
        </Card>
      </React.Fragment>
    );
  };

  const renderAnswers = (item: QuestionType, index: number, length: number) => {
    return <React.Fragment>wfwfewef</React.Fragment>;
  };

  {
    console.log(quizzes);
  }
  if (quizzes === null) {
    return <></>;
  }
  return (
    <React.Fragment>
      <h1>Quizzes!</h1>
      <h3>Das Quiz: {quizzes.title}</h3>
      {quizzes.questions.map((item, index) =>
        renderCardQuizz(item, index, questionLength)
      )}
      {/* <p>{quizzes}</p> */}
    </React.Fragment>
  );
};

export default Quiz;
function useStyles(): { classes: any } {
  throw new Error("Function not implemented.");
}
