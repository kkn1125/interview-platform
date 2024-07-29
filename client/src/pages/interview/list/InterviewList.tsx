import QuestionCard from "@components/atoms/QuestionCard";
import { sliceGroup } from "@libs/sliceGroup";
import { sliceGroupAndFill } from "@libs/sliceGroupAndFill";
import {
  Box,
  Button,
  Stack,
  TextField,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FormEvent, useMemo } from "react";

const questions: QuestionCardProps[] = [
  {
    id: 1,
    title: "Introduce yourself",
    categories: ["personal"],
    answered: 5,
    createdAt: new Date(),
  },
  {
    id: 2,
    questions: 3,
    title: "Career Journey",
    categories: ["personal", "popular"],
    answered: 5,
    createdAt: new Date(2024, 6, 20, 12, 38),
  },
  {
    id: 3,
    questions: 3,
    title: "Career Journey",
    categories: ["personal", "popular"],
    answered: 5,
    createdAt: new Date(2024, 6, 20, 12, 38),
  },
  {
    id: 4,
    questions: 3,
    title: "Career Journey",
    categories: ["personal", "popular"],
    answered: 5,
    createdAt: new Date(2024, 6, 20, 12, 38),
  },
  {
    id: 5,
    questions: 3,
    title: "Career Journey",
    categories: ["personal", "popular"],
    answered: 5,
    createdAt: new Date(2024, 6, 20, 12, 38),
  },
  {
    id: 6,
    questions: 3,
    title: "Career Journey",
    categories: ["personal", "popular"],
    answered: 5,
    createdAt: new Date(2024, 6, 20, 12, 38),
  },
];

function InterviewList() {
  const theme = useTheme();
  const isXsUp = useMediaQuery(theme.breakpoints.up("xs"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    return false;
  }

  const slicedList = useMemo(() => {
    let amount = 1;
    if (isLgUp) amount = 5;
    else if (isMdUp) amount = 4;
    else if (isSmUp) amount = 3;
    return sliceGroupAndFill(questions, amount, null);
  }, [isXsUp, isSmUp, isMdUp, isLgUp]);

  return (
    <Stack flex={1}>
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
      <Stack gap={3}>
        {slicedList.map((row, r) => (
          <Stack direction='row' key={r} gap={3}>
            {row.map((question, i) =>
              question ? (
                <QuestionCard key={i + question.id} question={question} />
              ) : (
                <Box key={i} flex={1} maxWidth={250} p={3} />
              )
            )}
          </Stack>
        ))}
      </Stack>
      <Toolbar />
    </Stack>
  );
}

export default InterviewList;
