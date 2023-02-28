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
  Progress,
  Text,
  Title,
  Transition,
} from "@mantine/core";
import { _Center } from "@mantine/core/lib/Center/Center";
import { useLocalStorage } from "@mantine/hooks";
import {
  IconCheck,
  IconCircleCheck,
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
} from "@tabler/icons";
import React from "react";
import { Fragment, useEffect, useState } from "react";
import Countdown from "../components/Countdown";
import { ProgressRing } from "../components/ProgressRing";
import Quiz_MultipleChoice from "../components/Quiz/Quiz_MultipleChoice";
import MultipleChoice from "../components/Quiz/Quiz_MultipleChoice";
import Quiz_Numeric from "../components/Quiz/Quiz_Numeric";
import Quiz_TrueOrFalse from "../components/Quiz/Quiz_TrueOrFalse";
import { useClient } from "../hooks/useClient";
// import ProgressRing from "../components/ProgressRing";

const Quiz = () => {
  const client = useClient();
  const [quizzes, setQuizzes] = useState<APIQuiz | null>(null);
  const id = "3ef19646-b6f2-11ed-85eb-2309bacec01a";
  const [questionLength, setQuestionLength] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [verified, setVerified] = useState<number>(-1);
  const [answerIsClicked, setAnswerIsClicked] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [buttonName, setButtonName] = useState<boolean>(false);
  const [opened, setOpened] = useState<boolean>(false);

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
  }, []);

  useEffect(() => {
    if (quizzes !== null) {
      setQuestionLength(quizzes.questions.length);
    } else {
      setQuestionLength(0);
    }
  }, [quizzes]);

  const checkButtonOnClick = (index: number) => {
    setButtonName(!buttonName);
    if (checked) {
      setVerified(index);
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

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

  const { classes } = useStyles();

  const renderCardQuizz = (
    item: APIQuizQuestion,
    index: number,
    length: number
  ) => {
    return (
      <React.Fragment key={index}>
        <Card withBorder radius="md" className={classes.card}>
          <Group position="apart" mt="md">
            <div>
              <Text weight={500}>{item.question}</Text>
              {/* <Text size="xs" color="dimmed">
                Das ist noch eine Mockup Zeile
              </Text> */}
            </div>
            <Badge variant="outline">
              Question {index + 1} / {length}
            </Badge>
          </Group>

          <Card.Section className={classes.section} mt="md">
            <Text size="sm" color="dimmed" className={classes.label}>
              Answer options
            </Text>

            <Group spacing={8} mb={-8}>
              {item.data.type === "MultipleChoice" && (
                <Quiz_MultipleChoice
                  data={item.data as MultipleChoiceQuestion}
                  // verified={verified >= index}
                  verified={checked}
                  onCheck={onCheck}
                  onChange={(i) => setAnswerIsClicked(i !== null)}
                  answerIsClicked={answerIsClicked}
                />
              )}
              {item.data.type === "Numeric" && (
                <Quiz_Numeric data={item.data as NumericQuestion} />
              )}
              {item.data.type === "TrueOrFalse" && (
                <Quiz_TrueOrFalse data={item.data as TrueOrFalseQuestion} />
              )}
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
                  possible points
                </Text>
              </div>

              <Button
                onClick={() => checkButtonOnClick(index)}
                radius="xl"
                style={{ flex: 1 }}
                disabled={!answerIsClicked}
              >
                {buttonName === true ? "Next Question" : "Check"}
              </Button>
              {/* Mantine Disabled button wenn noch nichts angeklicked is */}
            </Group>
          </Card.Section>
        </Card>
      </React.Fragment>
    );
  };

  const berechneProgress = (score: number, max: number) => {
    return 100 - ((max - score) * 100) / max;
  };
  const berechneColor = (score: number, max: number) => {
    if (max - (max - score) > Math.floor(max / 2)) {
      return "green";
    } else if (max - (max - score) <= Math.floor(max / 2) && score > 0) {
      return "orange";
    } else {
      return "red";
    }
  };

  const berechneDatum = () => {
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    nextDay.setHours(10, 0, 0, 0);
    return nextDay;
  };

  const renderAfterQuiz = () => {
    //Backend call für Score
    client.user.postApiUserScore({ score }).then((resp) => {
      console.log(resp);
    });
    localStorage.setItem("dailyquiz", "done");
    return (
      <React.Fragment>
        {/* <Transition
          mounted={true}
          duration={3000}
          transition={"pop-bottom-left"}
        >
          {() => <IconCheck size="sm" color="lightgreen" />}
        </Transition> */}
        {/* <div className="wieduwillst"> */}
        <Center>
          <IconCheck size="11rem" color="lightgreen" />
        </Center>
        {/* </div> */}
        <Title>Done!</Title>
        <Center>
          <h3>Your resulting points:</h3>
        </Center>
        <Center>
          {/* //hdbhwqdf */}
          <ProgressRing
            data={[
              {
                label: "Your points",
                stats: "" + score + " / " + questionLength + "",
                progress: berechneProgress(score, questionLength),
                color: berechneColor(score, questionLength),
                icon: "up",
              },
            ]}
          />
        </Center>
        <Center>
          <h4>Next daily quiz in:</h4>
        </Center>
        <Center>
          <Countdown />
        </Center>
      </React.Fragment>
    );
  };

  {
    console.log(quizzes);
  }
  if (quizzes === null) {
    return <></>;
  }
  return (
    <React.Fragment>
      <h1>Your daily Quiz!</h1>
      <h3>The Quiz today is about: "{quizzes.title}"</h3>
      {verified === quizzes.questions.length - 1 ||
      localStorage.getItem("dailyquiz") === "done"
        ? renderAfterQuiz()
        : quizzes.questions.map((item, index) =>
            renderCardQuizz(item, index, questionLength)
          )[verified + 1]}
      {/* <p>{quizzes}</p> */}
    </React.Fragment>
  );
};

export default Quiz;
function useStyles(): { classes: any } {
  throw new Error("Function not implemented.");
}
