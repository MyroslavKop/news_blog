import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
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
}

export default App;
