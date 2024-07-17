import { Box, styled } from "@mui/material";

const FooterExtendsBox = (props: any) => <Box component='footer' {...props} />;

const FooterComponent = styled(FooterExtendsBox)`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
`;

function Footer() {
  return (
    <FooterComponent>
      <p>&copy; 2024 Interview Platform. All rights reserved.</p>
    </FooterComponent>
  );
}

export default Footer;
