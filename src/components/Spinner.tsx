import { CircularProgress, Box } from "@mui/material";

const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CircularProgress sx={{ color: "#1a90ff" }} />
    </Box>
  );
};

export default Spinner;
