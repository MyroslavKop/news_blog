import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchNews, deleteNews } from "../redux/newsSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const News = () => {
  const dispatch = useAppDispatch();
  // @ts-ignore
  const { news, isLoading, error, currentPage } = useAppSelector(
    (state) => state.news
  );

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchNews({ page: currentPage }));
  }, [currentPage]);
  console.log(currentPage);
  // @ts-ignore
  return (
    <Grid container spacing={3} sx={{ mt: 3, p: 2 }} justifyContent="center">
      {news.map(({ id, title, body }) => (
        <Grid item key={id} xs={6}>
          <Card
            sx={{
              minWidth: 275,
              maxHeight: 250,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                color="#000000"
                fontSize={25}
                fontWeight="bold"
              >
                {title}
              </Typography>
              <Typography variant="body2" color="#000000" fontSize={16}>
                {body}
              </Typography>
              <Typography variant="body2" color="#000000" fontSize={16}>
                {id}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                endIcon={<DeleteForeverIcon />}
                color="secondary"
                variant="contained"
                onClick={() => dispatch(deleteNews({ id }))}
              >
                Delete post
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      <Button variant="contained" size="large" sx={{ mt: 3 }}>
        Load more
      </Button>
    </Grid>
  );
};

export default News;
