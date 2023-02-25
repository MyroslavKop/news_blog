import { INews } from "../models/INews";
import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// @ts-ignore
export const fetchNews = createAsyncThunk("news/fetchAll", async (page) => {
  const response = await axios.get<INews[]>(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}`
  );
  return response.data;
});

interface NewsState {
  news: INews[];
  currentPage: number;
  isLoading: boolean;
  error: string;
}

// @ts-ignore
const initialState: NewsState = {
  news: [],
  // @ts-ignore
  currentPage: 5,
  isLoading: false,
  error: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    deleteNews: (state, action) => {
      state.news = state.news.filter((item) => item.id !== action.payload.id);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [fetchNews.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchNews.fulfilled.type]: (state, action) => {
      state.news = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    [fetchNews.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { deleteNews, setCurrentPage } = newsSlice.actions;
export default newsSlice.reducer;
