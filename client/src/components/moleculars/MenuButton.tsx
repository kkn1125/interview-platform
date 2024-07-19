import { Menu as MenuIcon } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

type HTMLOrNull = HTMLElement | null;

function MenuButton() {
  const navigate = useNavigate();
  const [anchor, setAnchor] = useState<HTMLOrNull>(null);

  function handleOpenMenu(e: MouseEvent<HTMLElement>) {
    setAnchor(e.currentTarget);
  }

  function handleCloseMenu() {
    setAnchor(null);
  }

  return (
    <>
      <IconButton color='inherit' onClick={handleOpenMenu}>
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchor}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchor)}
        onClose={handleCloseMenu}>
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            navigate("/");
          }}>
          <Typography>메인</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            navigate("/interview/list");
          }}>
          <Typography>인터뷰 리스트</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default MenuButton;
