import { SwipeableDrawer } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

const navigationLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "News", href: "news" },
  { id: 3, name: "Profile", href: "profile" },
];

interface MobileMenuProps {
  open: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

const MobileMenu = ({ open, openMenu, closeMenu }: MobileMenuProps) => {
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
        {navigationLinks.map(({ id, name, href }) => (
          <Button
            key={id}
            color="inherit"
            component={RouterLink}
            sx={{ fontSize: 16 }}
            onClick={closeMenu}
            to={href}
          >
            {name}
          </Button>
        ))}
      </Box>
    </SwipeableDrawer>
  );
};

export default MobileMenu;
