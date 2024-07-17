import { Box, Typography } from "@mui/material";

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
      <Typography component='h3' variant='h5' fontWeight={700}>
        Interview Platform
      </Typography>
    </Box>
  );
}

export default Header;
