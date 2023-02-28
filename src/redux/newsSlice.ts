import INews from "../interfaces";
import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const loadNews = async (page: number = 0) => {
  return {
    data: (
      await axios.get<INews[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _page: page,
        },
      })
    ).data,
    page,
  };
};

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (page: number = 1) => {
    return loadNews(page);
  }
);

export const fetchNewsMore = createAsyncThunk(
  "news/fetchNewsMore",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    return loadNews(state.news.currentPage + 1);
  }
);

interface NewsState {
  news: INews[];
  currentPage: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  news: [],
  currentPage: 1,
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    deleteNews: (state, action: PayloadAction<{ id: number }>) => {
      state.news = state.news.filter((item) => item.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchNews.fulfilled,
        (state, action: PayloadAction<{ data: INews[]; page: number }>) => {
          state.news = action.payload.data;
          state.currentPage = action.payload.page;
          state.isLoading = false;
          state.error = "";
        }
      )
      .addCase(fetchNews.rejected, (state) => {
        state.isLoading = false;
        state.error = "Data loading error";
      });

    builder
      .addCase(fetchNewsMore.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchNewsMore.fulfilled,
        (state, action: PayloadAction<{ data: INews[]; page: number }>) => {
          state.currentPage = action.payload.page;
          state.news = [...state.news, ...action.payload.data];
          state.isLoading = false;
          state.error = "";
        }
      )
      .addCase(fetchNewsMore.rejected, (state) => {
        state.isLoading = false;
        state.error = "Data loading error";
      });
  },
});

export const { deleteNews } = newsSlice.actions;
export default newsSlice.reducer;
