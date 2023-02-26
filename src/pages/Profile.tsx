import { Box, Typography } from "@mui/material";

import defaultAvatar from "../assets/img/default_avatar.png";
import ProfileInfo from "../components/ProfileInfo";

const Profile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: {
          md: "row",
          xs: "column",
        },
        gap: {
          md: 6,
          xs: 3,
        },
        alignItems: {
          xs: "center",
        },
        maxHeight: "800px",
        padding: "70px 16px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#8561c5",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "400px",
          p: {
            md: 3,
            xs: 1,
          },
        }}
      >
        <Box
          sx={{
            maxWidth: {
              md: "200px",
              xs: "150px",
            },
            maxHeight: {
              md: "200px",
              xs: "150px",
            },
          }}
        >
          <img
            src={defaultAvatar}
            alt="default avatar"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              md: "30px",
              xs: "25px",
            },
            fontWeight: 600,
          }}
        >
          Mike
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              md: "18px",
              xs: "16px",
            },
            textAlign: "center",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 5,
          gridTemplateColumns: {
            md: "1fr 1fr",
            xs: "1fr",
          },
          justifyContent: "center",
          marginTop: 1,
          p: 2,
        }}
      >
        <ProfileInfo category="Email" info="userprofile@gmail.com" />
        <ProfileInfo category="Phone number" info="+38(099)99999999" />
        <ProfileInfo category="Country" info="Ukraine" />
        <ProfileInfo category="Gender" info="Male" />
      </Box>
    </Box>
  );
};

export default Profile;
