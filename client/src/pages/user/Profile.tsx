import { Button, Paper, Stack, Toolbar, Typography } from "@mui/material";

function Profile() {
  return (
    <Stack flex={1} sx={{ maxWidth: 800, mx: "auto", width: "100%" }}>
      <Paper component={Stack} gap={3} sx={{ p: 4, my: 4 }}>
        <Typography fontSize={30} fontWeight={700} my={3} align='center'>
          My Answers
        </Typography>
        <Stack gap={2} borderRadius={1} p={2} sx={{ background: "#e0e0e056" }}>
          <Typography fontSize={20} fontWeight={700} mt={2}>
            Introduce yourself
          </Typography>
          <Typography fontSize={16} fontWeight={700} color='#959595'>
            This is a summary of your answer...
          </Typography>
          <Button
            fullWidth
            size='large'
            variant='contained'
            sx={{
              px: "1.6rem",
              py: "0.6rem",
              fontSize: "1.2rem",
            }}>
            답변 수정
          </Button>
        </Stack>
        <Stack gap={2} borderRadius={1} p={2} sx={{ background: "#e0e0e056" }}>
          <Typography fontSize={20} fontWeight={700} mt={2}>
            What is your age?
          </Typography>
          <Typography fontSize={16} fontWeight={700} color='#959595'>
            This is a summary of your answer...
          </Typography>
          <Button
            fullWidth
            size='large'
            variant='contained'
            sx={{
              px: "1.6rem",
              py: "0.6rem",
              fontSize: "1.2rem",
            }}>
            답변 수정
          </Button>
        </Stack>
        <Stack gap={3} mt={3}>
          <Button
            fullWidth
            size='large'
            variant='contained'
            sx={{
              px: "1.6rem",
              py: "0.6rem",
              fontSize: "1.2rem",
            }}>
            인터뷰 완료하기
          </Button>
          <Button
            fullWidth
            size='large'
            variant='contained'
            sx={{
              px: "1.6rem",
              py: "0.6rem",
              fontSize: "1.2rem",
            }}>
            인터뷰 공유하기
          </Button>
        </Stack>
      </Paper>
      <Toolbar />
    </Stack>
  );
}

export default Profile;
