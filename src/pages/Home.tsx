import { Typography, Box } from "@mui/material";

import background from "../assets/img/homapage_background.png";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          md: "row",
          xs: "column",
        },
        justifyContent: {
          md: "space-around",
        },
        alignItems: "center",
        height: "100%",
        textAlign: {
          md: "left",
          xs: "center",
        },
        paddingTop: {
          xs: "50px",
        },
      }}
    >
      <Box
        sx={{
          width: "300px",
          borderLeft: {
            md: "19px solid rgba(202, 175, 175, 0.49)",
            xs: "none",
          },
          borderRadius: "10px",
          paddingLeft: {
            md: "30px",
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              md: 100,
              xs: 80,
            },
          }}
        >
          News Blog
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              md: 34,
              xs: 25,
            },
            ml: 1,
          }}
        >
          Home Page
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: {
            md: "550px",
            xs: "450px",
          },
          maxHeight: {
            md: "550px",
            xs: "450px",
          },
        }}
      >
        <img
          src={background}
          alt="homepage background"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default Home;
