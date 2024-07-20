import QuestionCard from "@components/atoms/QuestionCard";
import { Button, Paper, Stack, TextField, Toolbar } from "@mui/material";
import { FormEvent } from "react";

const questions: QuestionCardProps[] = [
  {
    id: 1,
    title: "Introduce yourself",
    contents: "Provide a brief introduction about yourself.",
    categories: ["personal", "popular"],
    answered: 5,
    createdAt: new Date(),
  },
  {
    id: 2,
    questions: 3,
    title: "Career Journey",
    contents: "Share your experiences and milestones in your career.",
    categories: ["personal", "popular"],
    answered: 5,
    createdAt: new Date(2024, 6, 20, 12, 38),
  },
];

function InterviewList() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    return false;
  }
  return (
    <Stack
      flex={1}
      sx={{
        width: "90%",
        mt: 8,
        mx: "auto",
      }}>
      <Stack sx={{ mb: 4 }}>
        <Stack direction='row' component='form' onSubmit={handleSubmit}>
          <TextField
            fullWidth
            size='small'
            InputProps={{
              sx: {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              },
            }}
            sx={{
              background: "#ffffff",
            }}
            placeholder='검색어 입력'
          />
          <Button
            size='small'
            type='submit'
            variant='contained'
            sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
            검색
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction='row'
        justifyContent='space-between'
        gap={2}
        sx={{ position: "relative" }}>
        {questions.map((question, i) => (
          <QuestionCard
            key={i + question.title}
            id={question.id}
            questions={question.questions}
            title={question.title}
            contents={question.contents}
            categories={question.categories}
            answered={question.answered}
            createdAt={question.createdAt}
          />
        ))}
      </Stack>
      <Toolbar />
    </Stack>
  );
}

export default InterviewList;
