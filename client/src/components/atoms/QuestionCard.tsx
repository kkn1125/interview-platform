import useCustomNavigate from "@hooks/useCustomNavigate";
import { Button, Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import { capitalize } from "@utils/capitalize";
import { isNil } from "@utils/isNil";
import { timeAgo } from "@utils/timeAgo";

function QuestionCard({
  id,
  questions,
  title,
  categories,
  answered,
  createdAt,
}: QuestionCardProps) {
  const { forward } = useCustomNavigate();
  return (
    <Grid item>
      <Paper
        sx={{
          p: 3,
          position: "relative",
        }}>
        {questions && (
          <Chip
            size='small'
            variant='outlined'
            color='primary'
            label={`${questions} Question${questions > 1 ? "s" : ""}`}
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
          {title}
        </Typography>
        <Stack direction='row' justifyContent='center' gap={1}>
          {categories.map((category) => (
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
          <Typography color='#777'>{answered} answers</Typography>
          <Typography color='#777'>{timeAgo(createdAt)}</Typography>
        </Stack>
        {!isNil(questions) && (
          <Button
            fullWidth
            onClick={() => forward(["/interview", "list", String(id)])}>
            질문 목록 보기
          </Button>
        )}
        <Button
          fullWidth
          onClick={() => forward(["/interview", "list", String(id), "answer"])}>
          이 질문{!isNil(questions) && " 묶음"}에 답하기
        </Button>
      </Paper>
    </Grid>
  );
}

export default QuestionCard;
