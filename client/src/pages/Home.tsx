import ForwardButton from "@components/atoms/ForwardButton";
import useGuard from "@hooks/useGuard";
import { Box, Stack, Typography } from "@mui/material";
import SummaryCard from "../components/atoms/SummaryCard";
import { useContext, useEffect } from "react";
import {
  LoginActionType,
  LoginContext,
  LoginDispatchContext,
} from "@src/providers/LoginProvider";
import { useMutation } from "@tanstack/react-query";
import { requestInterview } from "@src/axios/request.interview";
import { checkLogin } from "@src/apis/auth/check.login";

function Home() {
  const loginDispatch = useContext(LoginDispatchContext);
  const loginState = useContext(LoginContext);
  const mutation = useMutation({
    mutationKey: ["checkLogin"],
    mutationFn: handleCheckLogin,
  });

  function handleCheckLogin() {
    return checkLogin();
  }

  useEffect(() => {
    mutation.mutate();
  }, []);

  const { createGuard } = useGuard();

  const loginGuard = createGuard("loginGuard", () => !loginState);

  return (
    <Stack flex={1}>
      <Box component='main' textAlign='center' p={4}>
        <Typography
          component='h2'
          fontSize='2.5rem'
          fontWeight={700}
          color='#333'
          align='center'
          gutterBottom
          px={10}>
          모두에게 질문하고 이야기를 공유하세요
        </Typography>
        <Typography fontSize='1.2rem' gutterBottom color='#777'>
          나의 지금은 누군가에게 과거가 되고, 과거의 질문이 모여 현재의 나와
          소통하고 기록합니다. 자신만의 완성된 인터뷰를 자기소개에 활용해보세요.
        </Typography>
        <ForwardButton
          sx={{ mt: 4 }}
          to='/interview/choise'
          guard={() => loginGuard()}>
          인터뷰 시작하기
        </ForwardButton>
      </Box>
      <Stack direction='row' justifyContent='center' gap={2} mt={1}>
        <SummaryCard
          title='익명 인터뷰'
          contents={["사람들의 최신 익명 인터뷰를 읽어보세요."]}
        />
        <SummaryCard
          title='인기 있는 주제'
          contents={[
            "인기 있는 토픽을 탐색하고 사람들이 어떤 이야기를 하고 있는지 확인하세요.",
          ]}
        />
        <SummaryCard
          title='경험 공유'
          contents={[
            "커뮤니티에 가입하고 익명으로 나만의 이야기를 공유해 보세요.",
          ]}
        />
      </Stack>
      {/* <div className='cards'>
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
      </div> */}
    </Stack>
  );
}

export default Home;
