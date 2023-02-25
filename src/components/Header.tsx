import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";
import { useState } from "react";
import ModalWindow from "./ModalWindow";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link as RouterLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function ResponsiveAppBar() {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isAuth } = useAppSelector((state) => state.auth);

  const handleOpenNavMenu = () => setOpen(true);
  const handleCloseNavMenu = () => setOpen(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontSize: "25px",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            HOME
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <MobileMenu
              open={open}
              openMenu={handleOpenNavMenu}
              closeMenu={handleCloseNavMenu}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              component={RouterLink}
              to="news"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              News
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", gap: 2 }}>
            <ButtonGroup
              variant="text"
              color="inherit"
              aria-label="text button group"
            >
              <Button>EN</Button>
              <Button>UA</Button>
            </ButtonGroup>
            {isAuth && (
              <>
                <IconButton
                  sx={{
                    p: 0,
                    display: {
                      md: "flex",
                      xs: "none",
                    },
                  }}
                  component={RouterLink}
                  to="profile"
                >
                  <AccountCircle fontSize="large" sx={{ color: "white" }} />
                </IconButton>
                <Button variant="contained" onClick={handleLogout}>
                  logout
                </Button>
              </>
            )}
            <ModalWindow />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
