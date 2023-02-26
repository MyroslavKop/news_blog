import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Typography, Button, Dialog, Box } from "@mui/material";

import { useAppSelector } from "../hooks/redux";
import LoginForm from "./LoginForm";

const ModalWindow = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const { isAuth } = useAppSelector((state) => state.auth);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div>
      {!isAuth && (
        <Button variant="contained" onClick={openModal}>
          {t("login")}
        </Button>
      )}
      <Dialog open={open} onClose={closeModal}>
        <Box sx={{ backgroundColor: "#fcfcff", p: "20px" }}>
          <Typography
            sx={{
              fontSize: "24px",
              lineHeight: "33px",
              fontWeight: 700,
              mb: "10px",
            }}
            color="text.secondary"
          >
            Sigh Up
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "25px",
              mb: "20px",
            }}
            color="text.secondary"
          >
            Login using your username and password.
          </Typography>
          <LoginForm closeModal={closeModal} />
        </Box>
      </Dialog>
    </div>
  );
};

export default ModalWindow;
