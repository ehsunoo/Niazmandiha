import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://niazmandiha-d3d70-default-rtdb.europe-west1.firebasedatabase.app/ads.json";

const initialState = {
  ads: [],
  ad: { title: "", description: "", price: "", location: "" },
  loading: true,
};

// prettier-ignore
// Retrieve all ads from server
export const getAds = createAsyncThunk(
  "ad/getAds", 
  async () => {console.log("getads");
   return await axios.get(URL).then((res) => res.data);
});

// prettier-ignore
// Add new ad to server
export const addAd = createAsyncThunk(
  "ad/addAd",
  async (data) => {
  return await axios.post(URL, data).then(() => data);
});

// prettier-ignore
// Add new ad to server
export const getAd = createAsyncThunk(
  "ad/getAd",
  async (id) => {
  return await axios.get(`${URL}/?orderBy="id"&equalTo="${id}"`).then((res) => res.data);
});

export const adSlice = createSlice({
  name: "ad",
  initialState,
  extraReducers: {
    // Add new ad.
    [addAd.fulfilled]: (state, action) => {
      state.ads.push(action.payload);
      console.log("addAd: ", action);
    },
    [addAd.rejected]: (state) => console.log("Rejected"),
    [addAd.pending]: (state) => console.log("Pending"),
    // Home page data
    [getAds.fulfilled]: (state, action) => {
      state.loading = false;
      for (const key in action.payload) {
        state.ads.push({
          id: action.payload[key].id,
          title: action.payload[key].title,
          price: action.payload[key].price,
          location: action.payload[key].location,
        });
      }
    },
    // Each ad. details
    [getAd.fulfilled]: (state, action) => {
      state.ad = Object.values(action.payload)[0];
    },
  },
});

export default adSlice.reducer;
