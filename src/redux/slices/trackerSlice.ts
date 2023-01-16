import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { dataInfo } from "../../common/app/types";

interface initstateI {
  data: dataInfo;
  coordinates: {
    lant: number;
    long: number;
  };
  loading: boolean;
}

const initialState: initstateI = {
  data: {
    ip: "",
    network: "",
    version: "",
    city: "",
    region: "",
    region_code: "",
    country: "",
    country_name: "",
    country_code: "",
    country_code_iso3: "",
    country_capital: "",
    country_tld: "",
    continent_code: "",
    in_eu: false,
    postal: "",
    latitude: 0,
    longitude: 0,
    timezone: "",
    utc_offset: "",
    country_calling_code: "",
    currency: "",
    currency_name: "",
    languages: "",
    country_area: "",
    country_population: "",
    asn: "",
    org: "",
  },
  coordinates: {
    lant: 40.75399913917295,
    long: -73.9873018558384,
  },
  loading: false,
};

export const fetchIpAddress = createAsyncThunk(
  "users/fetchIpAddress",
  async (search: string) => {
    const response =
      search === "render"
        ? await axios(`https://ipapi.co/json/`)
        : await axios(`https://ipapi.co/${search}/json/`);

    return response.data;
  }
);
// export const fetchIpAddressInfo = createAsyncThunk(
//   "users/fetchIpAddressInfo",
//   async (search: string) => {
//     const response = await axios(
//       `https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${search}`
//     );
//     return response.data;
//   }
// );

const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchIpAddress.fulfilled, (state, action) => {
      state.coordinates.lant = action.payload.latitude;
      state.coordinates.long = action.payload.longitude;
      state.data = action.payload;
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
