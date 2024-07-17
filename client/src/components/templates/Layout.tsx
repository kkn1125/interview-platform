import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../orgasms/Header";
import Footer from "../orgasms/Footer";

function Layout() {
  return (
    <Stack sx={{ height: "inherit" }}>
      <Header />
      <Stack flex={1} sx={{ overflow: "auto" }}>
        <Outlet />
      </Stack>
      <Footer />
    </Stack>
  );
}

export default Layout;
