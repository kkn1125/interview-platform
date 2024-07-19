import { AccountCircle } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MenuButton from "../moleculars/MenuButton";

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
        <MenuButton />
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
        <IconButton color='inherit'>
          <AccountCircle />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Header;
