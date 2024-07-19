import { Stack, Typography } from "@mui/material";

type SummaryCardProps = {
  title: string;
  contents: string[];
};

function SummaryCard({ title, contents }: SummaryCardProps) {
  return (
    <Stack
      sx={{
        backgroundColor: "white",
        padding: "1.5rem",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        width: "300px",
      }}>
      <Typography
        component='h3'
        fontSize={"1.5rem"}
        fontWeight={700}
        color='#333'
        sx={{ my: 3 }}>
        {title}
      </Typography>
      <Stack
        sx={{
          mt: 0.5,
          mb: 1,
        }}>
        {contents.map((content, i) => (
          <Typography
            key={i + content}
            component='div'
            fontSize={16}
            color='#777'>
            {content}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
}

export default SummaryCard;
