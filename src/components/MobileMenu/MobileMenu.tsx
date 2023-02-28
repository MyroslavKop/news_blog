import {
  SwipeableDrawer,
  Box,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link as RouterLink } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hooks/redux";
import { MobileMenuProps, NavigationLinks } from "./interfaces";

const MobileMenu = ({ open, openMenu, closeMenu }: MobileMenuProps) => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const { t } = useTranslation();

  const navigationLinks = [
    { id: 1, name: "home", href: "/" },
    { id: 2, name: "news", href: "news" },
    { id: 3, name: "profile", href: "profile", isAuth: !isAuth },
  ];

  const filteredLinks: NavigationLinks[] = navigationLinks.filter(
    ({ isAuth }) => !isAuth
  );

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onOpen={openMenu}
      onClose={closeMenu}
      color="primary"
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton sx={{ mr: "0 auto" }} onClick={closeMenu}>
          <ChevronLeftIcon sx={{ color: "#FCFCFF" }} />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: "#482880" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 4,
          gap: 4,
          alignItems: "center",
        }}
      >
        {filteredLinks.map(({ id, name, href }: NavigationLinks) => (
          <Button
            key={id}
            color="inherit"
            component={RouterLink}
            sx={{ fontSize: 16 }}
            onClick={closeMenu}
            to={href}
          >
            {t(`${name}`)}
          </Button>
        ))}
      </Box>
    </SwipeableDrawer>
  );
};

export default MobileMenu;
