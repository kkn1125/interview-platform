import { AccountCircle, Menu } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MenuButton from "../moleculars/MenuButton";

const menuList = [
  { name: "메인", to: "/" },
  { name: "새 질문 등록", to: "/interview/register" },
  { name: "질문 목록", to: "/interview/list" },
];
const userMenuList = [
  { name: "로그인", to: "/user" },
  { name: "로그아웃", to: "/user" },
  { name: "프로필", to: "/user/profile" },
];

function Header() {
  return (
    <Box
      component='nav'
      sx={{
        backgroundColor: "#1a73e8",
        color: "white",
        padding: "1rem",
        textAlign: "center",
      }}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <MenuButton menuList={menuList} dir='left' icon={<Menu />} />
        <Typography
          component={Link}
          to='/'
          variant='h5'
          fontWeight={700}
          sx={{
            color: "inherit",
            textDecoration: "none",
          }}>
          Interview Platform
        </Typography>
        <MenuButton
          menuList={userMenuList}
          dir='right'
          icon={<AccountCircle />}
        />
      </Stack>
    </Box>
  );
}

export default Header;
