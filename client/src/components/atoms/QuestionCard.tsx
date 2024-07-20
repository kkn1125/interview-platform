import useCustomNavigate from "@hooks/useCustomNavigate";
import { Button, Chip, Paper, Stack, Typography } from "@mui/material";
import { capitalize } from "@utils/capitalize";
import { timeAgo } from "@utils/timeAgo";

function QuestionCard({
  id,
  questions,
  title,
  contents,
  categories,
  answered,
  createdAt,
}: QuestionCardProps) {
  const { forward } = useCustomNavigate();
  return (
    <Paper
      component={Stack}
      gap={2}
      flex={0.5}
      sx={{ p: 3, position: "relative" }}>
      {questions && (
        <Chip
          size='small'
          label={`${questions} Question${questions > 1 ? "s" : ""}`}
          sx={{
            borderRadius: 1,
            position: "absolute",
            top: 3,
            right: 3,
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
      <Typography align='center' color='#777'>
        {contents}
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
      <Button fullWidth onClick={() => forward(["/interview/answer", "" + id])}>
        이 질문에 답하기
      </Button>
    </Paper>
  );
}

export default QuestionCard;
