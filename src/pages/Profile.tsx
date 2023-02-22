import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import defaultAvatar from "../assets/img/default_avatar.png";
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
        gap: 6,
        height: "100%",
        paddingTop: "70px",
      }}
    >
      <Box sx={{ maxWidth: "200px", maxHeight: "200px" }}>
        <img
          src={defaultAvatar}
          alt="default avatar"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "column",
          flexBasis: 500,
          marginTop: 1,
        }}
      >
        <Box>
          <Typography
            variant="h3"
            fontSize={30}
            fontWeight={600}
            borderBottom="5px solid rgba(202, 175, 175, 0.49)"
            width="fit-content"
            marginBottom="6px"
          >
            Name
          </Typography>
          <Typography variant="body1" fontSize={18}>
            Mike
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h3"
            fontSize={30}
            fontWeight={600}
            borderBottom="5px solid rgba(202, 175, 175, 0.49)"
            width="fit-content"
            marginBottom="6px"
          >
            Email
          </Typography>
          <Typography variant="body1" fontSize={18}>
            userprofile@gmail.com
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h3"
            fontSize={30}
            fontWeight={600}
            borderBottom="5px solid rgba(202, 175, 175, 0.49)"
            width="fit-content"
            marginBottom="6px"
          >
            Phone number
          </Typography>
          <Typography variant="body1" fontSize={18}>
            +38(099)99999999
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h3"
            fontSize={30}
            fontWeight={600}
            borderBottom="5px solid rgba(202, 175, 175, 0.49)"
            width="fit-content"
            marginBottom="6px"
          >
            About me
          </Typography>
          <Typography variant="body1" fontSize={18}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
            autem cupiditate deleniti doloremque earum eligendi ex iure
            molestiae mollitia, nihil odio quae quis quod rem sapiente similique
            temporibus. At, et. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Amet, autem cupiditate deleniti doloremque earum
            eligendi ex iure molestiae mollitia, nihil odio quae quis quod rem
            sapiente similique temporibus. At, et.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
