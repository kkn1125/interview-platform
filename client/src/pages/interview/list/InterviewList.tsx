import QuestionCard from "@components/atoms/QuestionCard";
import { Button, Paper, Stack, TextField, Toolbar } from "@mui/material";
import { FormEvent } from "react";

function InterviewList() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    return false;
  }
  return (
    <Stack
      flex={1}
      sx={{
        maxWidth: 600,
        width: "100%",
        mt: 6,
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
      <Stack direction='row' justifyContent='space-between' gap={2}>
        <QuestionCard
          title='Introduce yourself'
          contents='Provide a brief introduction about yourself.'
        />
        <QuestionCard
          title='Introduce yourself'
          contents='Provide a brief introduction about yourself.'
        />
      </Stack>
    </Stack>
  );
}

export default InterviewList;
