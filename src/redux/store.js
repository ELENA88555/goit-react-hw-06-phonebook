import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { reducer } from './slice';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};



const persistedReducer = persistReducer(
  persistConfig,
  reducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);



// Створи сховище з configureStore()
// Використовуй функцію createSlice()
// Створи дії збереження та видалення контакту, а також оновлення фільтра
// Зв'яжи React-компоненти з Redux-логікою за допомогою хуків бібліотеки react-redux.
// Використай бібліотеку Redux Persist для збереження масиву контактів у локальному сховищі