import React, { FormEvent } from "react";
import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  const handleOnSubmit = (
    values: {
      name: string;
      email: string;
      subject: string;
      message: string;
    },
    event: React.FormEvent<HTMLFormElement> //Funktioniert nicht!!!
  ) => {
    console.log(event.currentTarget.element[0]);
    emailjs
      .sendForm(
        "service_qtg4b7j",
        "template_fpr1wpk",
        event.currentTarget.element[0],
        "gvse34ioy_SqRJQjr"
      )
      .then(
        (result: any) => {
          console.log(result);

          // show the user a success message
        },
        (error: any) => {
          console.log(error);
          // show the user an error
        }
      );
  };

  return (
    <React.Fragment>
      <form
        onSubmit={form.onSubmit((values, event) =>
          handleOnSubmit(values, event)
        )}
        onReset={form.onReset}
      >
        <Title
          order={2}
          size="h1"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
          weight={900}
          align="center"
        >
          Get in touch
        </Title>

        <SimpleGrid
          cols={2}
          mt="xl"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps("email")}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps("subject")}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps("subject")}
        />

        <Group position="center" mt="xl">
          <Button type="submit" size="md">
            Send message
          </Button>
        </Group>
      </form>
    </React.Fragment>
  );
}

export default ContactUs;
