import { Box, Button, Stack, Typography } from "@mui/material";

function Home() {
  return (
    <Stack flex={1}>
      <Box
        component='main'
        sx={{
          textAlign: "center",
          padding: "2rem",
        }}>
        <Typography
          component='h2'
          fontSize='2.5rem'
          fontWeight={700}
          color='#333'
          gutterBottom>
          Share Your Story, Anonymously
        </Typography>
        <Typography fontSize='1.2rem' gutterBottom color='#777'>
          Connect with others by sharing your experiences and reading theirs.
          Start your anonymous interview now.
        </Typography>
        <Button
          size='large'
          variant='contained'
          sx={{
            px: "1.6rem",
            py: "0.6rem",
            fontSize: "1.2rem",
          }}>
          Start Interview
        </Button>
      </Box>
      <div className='cards'>
        <div className='card'>
          <h3>Latest Interviews</h3>
          <p>
            Read the latest anonymous interviews from people all around the
            world.
          </p>
        </div>
        <div className='card'>
          <h3>Popular Topics</h3>
          <p>Explore popular topics and see what people are talking about.</p>
        </div>
        <div className='card'>
          <h3>Share Your Experience</h3>
          <p>Join the community and share your own story anonymously.</p>
        </div>
      </div>
    </Stack>
  );
}

export default Home;
