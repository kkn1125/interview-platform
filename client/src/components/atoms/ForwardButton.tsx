import useCustomNavigate from "@hooks/useCustomNavigate";
import { Button, ButtonOwnProps } from "@mui/material";

type ToType = { to?: string };
type ForwardButtonProps = {} & ButtonOwnProps;

function ForwardButton({ to, sx, ...props }: ToType & ForwardButtonProps) {
  const { forward } = useCustomNavigate();

  function handleForward() {
    if (to) {
      forward(to);
    }
  }

  return (
    <Button
      size='large'
      variant='contained'
      sx={{
        px: "1.6rem",
        py: "0.6rem",
        fontSize: "1.2rem",
        ...sx,
      }}
      {...(to && { onClick: handleForward })}
      {...props}
    />
  );
}

export default ForwardButton;
