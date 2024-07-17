import { Stack } from "@mui/material";

function Home() {
  return (
    <Stack flex={1}>
      <div className='main'>
        <h2>Share Your Story, Anonymously</h2>
        <p>
          Connect with others by sharing your experiences and reading theirs.
          Start your anonymous interview now.
        </p>
        <a href='#' className='cta-button'>
          Start Interview
        </a>
      </div>
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
