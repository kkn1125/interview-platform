import { Stack, Toolbar } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

function AskLayout() {
  return (
    <Stack flex={1} width='100%' maxWidth={600} mt={8} mx='auto'>
      <Outlet />
      <Toolbar />
    </Stack>
  );
}

export default AskLayout;
