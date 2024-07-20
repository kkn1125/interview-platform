import ForwardButton from "@components/atoms/ForwardButton";
import { Stack, Typography } from "@mui/material";

function InterviewChoise() {
  return (
    <Stack alignItems='center'>
      <Typography
        component='h2'
        fontSize='2.5rem'
        fontWeight={700}
        color='#333'
        align='center'
        gutterBottom
        sx={{
          px: 10,
        }}>
        무엇부터 시작해볼까요?
      </Typography>
      <Stack direction='row' gap={4}>
        <ForwardButton to='/interview/register'>새 질문 등록</ForwardButton>
        <ForwardButton to='/interview/list'>답변할 질문 선택하기</ForwardButton>
      </Stack>
    </Stack>
  );
}

export default InterviewChoise;
