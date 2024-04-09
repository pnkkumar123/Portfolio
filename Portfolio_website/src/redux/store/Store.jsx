import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ProjectApi } from '../slice/ProjectSlice'; // Import ProjectSlice reducer

// Define persistence configuration
const persistConfig = {
  key: 'root', // Unique key for the persisted state
  storage, // Storage engine (localStorage, AsyncStorage, etc.)
};

// Create persisted reducer
const persistedProjectReducer = persistReducer(persistConfig, ProjectApi.reducer);

// Configure Redux store
const store = configureStore({
  reducer: {
    [ProjectApi.reducerPath]: ProjectApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ProjectApi.middleware),
});

// Create persistor
export const persistor = persistStore(store);

export default store;

