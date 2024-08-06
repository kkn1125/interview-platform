import useCustomNavigate from "@hooks/useCustomNavigate";
import { Button, ButtonOwnProps } from "@mui/material";

type GuardType = { guard?: () => boolean };
type ToType = { to?: string };
type ForwardButtonProps = {} & ButtonOwnProps;

function ForwardButton({
  guard,
  to,
  sx,
  ...props
}: GuardType & ToType & ForwardButtonProps) {
  const { forward } = useCustomNavigate();

  function handleForward() {
    if (!guard || guard()) {
      if (to) {
        forward(to);
      }
      return;
    }

    if (!guard()) {
      alert("금지");
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
