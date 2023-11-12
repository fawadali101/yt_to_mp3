import { Stack, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../index.css";
const Navbar = () => {
  return (
    <Stack direction="row">
      <Box
        sx={{
          overflow: 'hidden',
          width: {xs: "100%", md: '85vw'},
          height: "auto",
          margin: "12px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 35px",
          flexDirection: {xs: 'column', sm: 'column', md: 'row'},
        }}
      >
        <Stack direction="row" sx={{
          marginTop: {xs: '8px', sm: '8px'}
        }}>
          <Typography variant="h3" fontSize="30px" fontWeight="bold">
            YTMP3
          </Typography>

          <Typography
            variant="h3"
            fontSize="30px"
            fontWeight="bold"
            color="red"
          >
            &nbsp;Master
          </Typography>
        </Stack>
        <Box
          sx={{
            width: "60%",
            display: 'flex',
            alignItems: "center",
            justifyContent: {xs: "center", sm: "center", md: 'flex-end'},
          }}
        >
          <Link to="/">
            <Button
              size="large"
              sx={{
                color: "red",
                ":hover": {
                  backgroundColor: "white",
                },
                marginRight: "12px",
              }}
            >
              Home
            </Button>{" "}
          </Link>
          <Link to="/about">
            <Button
              size="large"
              sx={{
                color: "black",
                ":hover": {
                  backgroundColor: "white",
                },
                marginRight: "12px",
              }}
            >
              About
            </Button>{" "}
          </Link>
          <Link to="/faq">
            <Button
              size="large"
              sx={{
                color: "black",
                ":hover": {
                  backgroundColor: "white",
                },
                marginRight: "12px",
              }}
            >
              F.A.Q
            </Button>
          </Link>
          <Link to="/blogs">
            <Button
              size="large"
              sx={{
                color: "white",
                backgroundColor: "red",
                border: '2px solid white',
                ":hover": {
                  color: "black",
                  backgroundColor: "transparent",
                  border: "2px solid red"
                },
                marginRight: "12px",
              }}
            >
              Blogs
            </Button>
          </Link>
        </Box>
      </Box>
    </Stack>
  );
};

export default Navbar;
