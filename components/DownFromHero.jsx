
import Box from "@mui/material/Box";

const BackToTop = ({ children }) => {


  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#down-from-hero-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Box
      onClick={handleClick}
      role="presentation"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
    >
      {children}
    </Box>
  );
};

export default BackToTop;