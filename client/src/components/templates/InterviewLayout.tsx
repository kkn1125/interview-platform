import { Stack, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

function InterviewLayout() {
  return (
    <Stack flex={1} width='90%' mt={8} mx='auto'>
      <Outlet />
      <Toolbar />
    </Stack>
  );
}

export default InterviewLayout;
