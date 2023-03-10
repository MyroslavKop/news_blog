import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { Box, Button, IconButton, Alert, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { authSuccess, authFail, clearError } from "../../redux/authSlice";
import { FormInputs, LoginFormProps } from "./interfaces";
import schema from "./schema";

const checkCredentials = (data: FormInputs): boolean => {
  return data.username === "admin" && data.password === "12345";
};

const LoginForm = ({ closeModal }: LoginFormProps) => {
  const { error, errorMessage } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { control, handleSubmit, resetField } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormInputs) => {
    if (!checkCredentials(data)) {
      dispatch(authFail());
    } else {
      closeModal();
      navigate("/profile");
      dispatch(authSuccess());
    }
  };

  const handleClose = () => dispatch(clearError());

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {errorMessage}
        </Alert>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Controller
          control={control}
          defaultValue=""
          name="username"
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Username"
              placeholder="Enter your username"
              type="text"
              variant="outlined"
              error={!!error}
              fullWidth
              helperText={error?.message || " "}
              sx={{
                "&:hover fieldset": {
                  borderColor: "#673ab7!important",
                },
              }}
              InputProps={{
                endAdornment: field.value.length > 0 && (
                  <IconButton onClick={() => resetField("username")}>
                    <ClearIcon color="primary" />
                  </IconButton>
                ),
                style: { color: "black" },
              }}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              label="Password"
              placeholder="Enter your password"
              type="password"
              fullWidth
              variant="outlined"
              error={!!error}
              helperText={error?.message || " "}
              sx={{
                "&:hover fieldset": {
                  borderColor: "#673ab7!important",
                },
              }}
              InputProps={{
                endAdornment: field.value.length > 0 && (
                  <IconButton onClick={() => resetField("password")}>
                    <ClearIcon color="primary" />
                  </IconButton>
                ),
                style: {
                  color: "black",
                },
              }}
            />
          )}
        />
        <Button type="submit" fullWidth variant="contained">
          LOGIN
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
