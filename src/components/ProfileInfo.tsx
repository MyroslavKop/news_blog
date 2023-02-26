import { Typography, Box } from "@mui/material";

interface ProfileInfoProps {
  category: string;
  info: string;
}

const ProfileInfo = ({ category, info }: ProfileInfoProps) => {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          fontSize: {
            md: "30px",
            xs: "22px",
          },
          fontWeight: 600,
          borderBottom: "5px solid rgba(202, 175, 175, 0.49)",
          width: "fit-content",
        }}
      >
        {category}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: {
            md: "18px",
            xs: "16px",
          },
        }}
      >
        {info}
      </Typography>
    </Box>
  );
};

export default ProfileInfo;
