import ForwardButton from "@components/atoms/ForwardButton";
import {
  Box,
  Button,
  Divider,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

function InterviewRegister() {
  return (
    <Stack flex={1} sx={{ maxWidth: 600, mx: "auto", width: "100%" }}>
      <Paper sx={{ p: 4, my: 4 }}>
        {/* each question */}
        <Typography
          component='h3'
          fontSize={24}
          fontWeight={700}
          align='center'
          gutterBottom
          my={2}>
          새 질문 등록
        </Typography>
        <Typography component='h5' mt={4} mb={1}>
          질문 주제
        </Typography>
        <TextField fullWidth size='small' placeholder='질문을 작성하세요.' />
        <Typography component='h5' mt={4} mb={1}>
          질문 유형
        </Typography>
        <Select size='small' fullWidth defaultValue='personal'>
          <MenuItem value='personal'>Personal</MenuItem>
          <MenuItem value='career'>Career</MenuItem>
          <MenuItem value='culture'>Culture</MenuItem>
        </Select>
        <ForwardButton sx={{ mt: 4 }}>질문 저장</ForwardButton>

        <Divider sx={{ my: 4 }} />

        {/* bundle */}
        <Typography
          component='h3'
          fontSize={24}
          fontWeight={700}
          align='center'
          gutterBottom
          my={2}>
          새 질문 묶음 등록
        </Typography>
        <Typography component='h5' mt={4} mb={1}>
          묶음 주제
        </Typography>
        <TextField
          fullWidth
          size='small'
          placeholder='질문 묶음의 주제를 작성하세요.'
        />
        <Typography component='h5' mt={4} mb={1}>
          질문 선택
        </Typography>
        <Select<string[]>
          size='small'
          fullWidth
          multiple
          native
          value={["personal"]}>
          <option value='personal'>Personal</option>
          <option value='career'>Career</option>
          <option value='culture'>Culture</option>
        </Select>
        <ForwardButton sx={{ mt: 4 }}>질문 묶음 저장</ForwardButton>
      </Paper>
      <ForwardButton to='/interview/list' sx={{ mt: 4 }}>
        질문 목록 보기
      </ForwardButton>
      <Toolbar />
    </Stack>
  );
}

export default InterviewRegister;
