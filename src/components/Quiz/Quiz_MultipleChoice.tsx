import {
  MultipleChoiceQuestion,
  QuestionType,
} from "@lets-science/letsscience-client";
import { Button, ButtonProps, Center, Grid, Group, Stack } from "@mantine/core";
import React, { useEffect, useState } from "react";
interface Quiz_MultipleChoiceProps {
  data: MultipleChoiceQuestion;
  verified: boolean;
  onCheck: (correct: boolean) => any;
  onChange?: (index: number | null) => any;
  answerIsClicked: boolean;
}
function Quiz_MultipleChoice(props: Quiz_MultipleChoiceProps) {
  const [ClickButton, setClickButton] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState<ButtonProps["variant"]>("outline");
  const [isDisabled, setisDisabled] = useState<boolean>(false);
  const [colorButton, setColorButton] = useState<ButtonProps["color"]>("");
  const [colorButtonFalse, setColorButtonFalse] =
    useState<ButtonProps["color"]>("");
  // const [answerIsClicked, setAnswerIsClicked] = useState<boolean>(false);

  const check = () => {
    props.onCheck(ClickButton === props.data.correct_answer);

    // if (props.verified && ClickButton === props.data.correct_answer) {
    if (props.verified) {
      setColorButton("green");
      setColorButtonFalse("red");
    }
  };

  useEffect(() => {
    if (props.onChange) {
      props.onChange(ClickButton);
    }
  }, [ClickButton]);

  const onClickButton = (index: number) => {
    if (index === ClickButton) {
      setClickButton(null);
    } else {
      setClickButton(index);
    }
    if (isClicked === "outline") {
      setIsClicked("filled");
    } else {
      setIsClicked("outline");
    }
  };

  useEffect(() => {
    if (props.verified) {
      check();
      //Alle Antwortmöglichkeiten auf disabled packen
      // setisDisabled(true);
    }
  }, [props.verified]);

  return (
    <React.Fragment>
      {/* <Stack> */}
      {/* <Center> */}
      <Grid columns={24}>
        {props.data.answers.map((item: String, index: number) => (
          // <Grid.Col key={index} span={12}>
          <Button
            m="0.2rem"
            mx="3vw"
            variant={index === ClickButton ? "filled" : "outline"}
            radius="md"
            size="md"
            onClick={() => {
              if (colorButton !== "green") {
                onClickButton(index);
              }
            }}
            disabled={isDisabled}
            color={
              index === props.data.correct_answer
                ? colorButton
                : index === ClickButton
                ? colorButtonFalse
                : ""
            }
            // : index === ClickButton
            // ? "red"
            // : ""
          >
            {item}
          </Button>
          // </Grid.Col>
        ))}
      </Grid>
      {/* </Center> */}
      {/* </Stack> */}
    </React.Fragment>
  );
}

export default Quiz_MultipleChoice;
