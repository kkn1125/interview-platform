import useCustomNavigate from "@hooks/useCustomNavigate";
import { Button, Chip, Paper, Stack, Typography } from "@mui/material";
import { capitalize } from "@utils/capitalize";
import { isNil } from "@utils/isNil";
import { timeAgo } from "@utils/timeAgo";

function QuestionCard({ question }: { question: QuestionCardProps }) {
  const { forward } = useCustomNavigate();
  return (
    <Paper
      sx={{
        flex: 1,
        // maxWidth: `calc(90% / 4)`,
        p: 3,
        position: "relative",
      }}>
      {question.questions && (
        <Chip
          size='small'
          variant='outlined'
          color='primary'
          label={`${question.questions} Question${
            question.questions > 1 ? "s" : ""
          }`}
          sx={{
            borderRadius: 1,
            position: "absolute",
            top: 5,
            right: 5,
            border: "none",
            backgroundColor: (theme) => theme.palette.primary.dark + "26",
          }}
        />
      )}
      <Typography
        fontSize={24}
        fontWeight={700}
        align='center'
        color='#333'
        mt={3}>
        {question.title}
      </Typography>
      <Stack direction='row' justifyContent='center' gap={1}>
        {question.categories.map((category) => (
          <Chip
            key={category}
            label={capitalize(category)}
            size='small'
            color='primary'
            sx={{ borderRadius: 1 }}
          />
        ))}
      </Stack>
      <Stack direction='row' justifyContent='space-between'>
        <Typography color='#777' align='left' fontSize={14}>
          {question.answered} answers
        </Typography>
        <Typography color='#777' align='right' fontSize={14}>
          {timeAgo(question.createdAt)}
        </Typography>
      </Stack>
      {!isNil(question.questions) && (
        <Button
          fullWidth
          onClick={() => forward(["/interview", "list", String(question.id)])}>
          질문 목록 보기
        </Button>
      )}
      <Button
        fullWidth
        onClick={() =>
          forward(["/interview", "list", String(question.id), "answer"])
        }>
        이 질문{!isNil(question.questions) && " 묶음"}에 답하기
      </Button>
    </Paper>
  );
}

export default QuestionCard;
