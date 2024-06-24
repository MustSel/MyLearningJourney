import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    newsData: [],
    loading: false,
    error: false,
}

export const getNews = createAsyncThunk("getNews", async () => {
    const API_KEY = "cd8dead7231c4348b730fd8ec4d02ea5"
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    const {data} = await axios(url)
    return data.articles
})
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewsData: (state) => {
        state.newsData = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state, action) => {
        state.loading = true
    } ).addCase(getNews.fulfilled, (state, action) => {
        state.loading = false
        state.newsData = action.payload
    } ).addCase(getNews.rejected, (state) => {
        state.loading = false
        state.error = true
    } )
  }
});

export const {clearNewsData} = newsSlice.actions

export default newsSlice.reducer