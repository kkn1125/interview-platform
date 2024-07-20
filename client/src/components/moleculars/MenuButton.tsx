import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { MouseEvent, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

type HTMLOrNull = HTMLElement | null;
type MenuType = { name: string; to: string };
type MenuButtonProps = {
  dir: "left" | "right";
  icon: ReactNode;
  menuList: MenuType[];
};
function MenuButton({ menuList, dir, icon }: MenuButtonProps) {
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
        {icon}
      </IconButton>
      <Menu
        anchorEl={anchor}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: dir,
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: dir,
        }}
        open={Boolean(anchor)}
        onClose={handleCloseMenu}>
        {menuList.map((menu) => (
          <MenuItem
            key={menu.name + menu.to}
            onClick={() => {
              handleCloseMenu();
              navigate(menu.to);
            }}>
            <Typography>{menu.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default MenuButton;
