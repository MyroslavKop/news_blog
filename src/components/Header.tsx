import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Button,
  ButtonGroup,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { logout } from "../redux/authSlice";
import ModalWindow from "./ModalWindow";
import MobileMenu from "./MobileMenu";

function ResponsiveAppBar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);

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
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <Button
              component={Link}
              to="/"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {t("home")}
            </Button>
            <Button
              component={Link}
              to="news"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {t("news")}
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", gap: 2 }}>
            <ButtonGroup
              variant="text"
              color="inherit"
              aria-label="text button group"
            >
              <Button onClick={() => changeLanguage("en")}>EN</Button>
              <Button onClick={() => changeLanguage("ua")}>UA</Button>
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
                  component={Link}
                  to="profile"
                >
                  <AccountCircle fontSize="large" sx={{ color: "white" }} />
                </IconButton>
                <Button variant="contained" onClick={handleLogout}>
                  {t("logout")}
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
