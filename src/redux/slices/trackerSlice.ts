import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  coordinates: {
    lant: 40.75399913917295,
    long: -73.9873018558384,
  },
  loading: false,
};

export const fetchIpAddress = createAsyncThunk(
  "users/fetchByIdStatus",
  async (search: string) => {
    const response = await axios(`https://geolocation-db.com/json/${search}`);
    return response.data;
  }
);

const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchIpAddress.fulfilled, (state, action) => {
      state.coordinates.lant = action.payload.latitude;
      state.coordinates.long = action.payload.longitude;
      state.loading = false;
    });
    builder.addCase(fetchIpAddress.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchIpAddress.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
// export const {} = trackerSlice.actions;

export default trackerSlice.reducer;
