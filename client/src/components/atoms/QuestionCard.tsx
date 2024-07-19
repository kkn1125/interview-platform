import { Chip, Paper, Stack, Typography } from "@mui/material";

type QuestionCardProps = {
  title: string;
  contents: string;
};
function QuestionCard({ title, contents }: QuestionCardProps) {
  return (
    <Paper sx={{ width: "calc(100% / 2 - 42px)", p: 2 }}>
      <Typography>{title}</Typography>
      <Typography>{contents}</Typography>
      <Stack direction='row' gap={1}>
        <Chip label='Career' />
        <Chip label='Popular' />
      </Stack>
      <Stack direction='row' justifyContent='space-between'>
        <Typography>10 answers</Typography>
        <Typography>3 days ago</Typography>
      </Stack>
    </Paper>
  );
}

export default QuestionCard;
