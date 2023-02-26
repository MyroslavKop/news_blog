import { useEffect } from "react";
import { Button, Grid, Box } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchNews, fetchNewsMore } from "../redux/newsSlice";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";

const News = () => {
  const dispatch = useAppDispatch();
  const { news, isLoading, error } = useAppSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  const loadMore = () => dispatch(fetchNewsMore());

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      padding={2}
    >
      <Grid container spacing={3} sx={{ mt: 3 }} justifyContent="center">
        {news.map(({ id, title, body }) => (
          <Grid item key={id} xs={12} md={6}>
            <NewsCard id={id} title={title} body={body} />
          </Grid>
        ))}
      </Grid>
      {isLoading ? (
        <Spinner />
      ) : (
        <Button
          variant="contained"
          size="large"
          onClick={loadMore}
          sx={{ mt: 2 }}
        >
          Load more
        </Button>
      )}
    </Box>
  );
};

export default News;
