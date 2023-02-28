import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { deleteNews } from "../../../redux/newsSlice";
import INews from "../../../interfaces";
import { useAppDispatch } from "../../../hooks/redux";

const NewsCard = ({ id, body, title }: INews) => {
  const dispatch = useAppDispatch();
  return (
    <Card
      sx={{
        minWidth: 150,
        minHeight: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontSize: {
              md: 25,
              xs: 20,
            },
            color: "#000000",
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="#000000"
          sx={{
            fontSize: {
              md: 16,
              xs: 14,
            },
          }}
        >
          {body}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          endIcon={<DeleteForeverIcon />}
          color="secondary"
          size="small"
          variant="contained"
          onClick={() => dispatch(deleteNews({ id }))}
        >
          Delete post
        </Button>
        <Typography
          variant="body2"
          color="#000000"
          fontSize={16}
          fontWeight="bold"
          borderRadius="50%"
          border="1px solid black"
          width="25px"
          textAlign="center"
        >
          {id}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
