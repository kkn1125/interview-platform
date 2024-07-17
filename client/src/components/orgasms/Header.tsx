import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
    </Box>
  );
}

export default Header;
