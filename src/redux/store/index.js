import { configureStore } from "@reduxjs/toolkit";

import adReducer from "../reducers/adSlice";

export default configureStore({
  reducer: {
    ad: adReducer,
  },
});
