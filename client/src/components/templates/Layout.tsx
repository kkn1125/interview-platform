import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../orgasms/Header";
import Footer from "../orgasms/Footer";

function Layout() {
  return (
    <Stack>
      <Header />
      <Outlet />
      <Footer />
    </Stack>
  );
}

export default Layout;
