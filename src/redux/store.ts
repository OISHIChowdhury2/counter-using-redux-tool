import { configureStore } from '@reduxjs/toolkit'
import countrReducer from '../components/counterSlice'

export const store = configureStore({
  reducer: {
    counter: countrReducer,
  },
})

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
