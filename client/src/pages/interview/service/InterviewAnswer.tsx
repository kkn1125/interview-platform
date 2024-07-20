import ForwardButton from "@components/atoms/ForwardButton";
import {
  Stack,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  Divider,
  Toolbar,
} from "@mui/material";
import React from "react";

function InterviewAnswer() {
  return (
    <Stack flex={1} sx={{ maxWidth: 600, mx: "auto", width: "100%" }}>
      <Paper sx={{ p: 4, my: 4 }}>
        {/* each question */}
        <Typography
          component='h3'
          fontSize={24}
          fontWeight={700}
          align='center'
          color='#333'
          gutterBottom
          my={2}>
          Introduce yourself
        </Typography>
        <Typography component='h5' mt={4} mb={1} color='#777'>
          Provide a brief introduction about yourself.
        </Typography>
        <TextField
          fullWidth
          multiline
          size='small'
          rows={3}
          placeholder='여기에 답변을 작성하세요.'
        />
        <ForwardButton sx={{ mt: 4 }}>답변 저장</ForwardButton>
      </Paper>
      <Toolbar />
    </Stack>
  );
}

export default InterviewAnswer;
