import ForwardButton from "@components/atoms/ForwardButton";
import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function InterviewRegister() {
  return (
    <Stack flex={1}>
      <Paper sx={{ p: 4, maxWidth: 600, mx: "auto", width: "100%", my: 4 }}>
        <Typography
          component='h3'
          fontSize={24}
          fontWeight={700}
          gutterBottom
          my={2}>
          새 질문 등록
        </Typography>
        <Typography component='h5' mt={2} mb={1}>
          질문 주제
        </Typography>
        <TextField fullWidth size='small' />
        <Typography component='h5' mt={2} mb={1}>
          질문 내용
        </Typography>
        <TextField multiline fullWidth size='small' rows={3} />
        <Typography component='h5' mt={2} mb={1}>
          질문 유형
        </Typography>
        <Select size='small' fullWidth>
          <MenuItem value='test'>test</MenuItem>
        </Select>
        <ForwardButton to='/interview/choise' sx={{ mt: 4 }}>
          질문 저장
        </ForwardButton>
      </Paper>
    </Stack>
  );
}

export default InterviewRegister;
