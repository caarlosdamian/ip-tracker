import { AnyAction, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import TrackerReducer from "./slices/trackerSlice";

export const store = configureStore({
  reducer: {
    tracker: TrackerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;