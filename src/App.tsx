import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Box, Container, CssBaseline } from "@mui/material";

import Routes from "./routes";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#28293e",
        }}
      >
        <Header />
        <Container sx={{ height: "calc(100% - 69px)" }}>
          <Routes />
        </Container>
      </Box>
    </BrowserRouter>
  );
};

export default App;
