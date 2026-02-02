import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PostAuth } from '../../shared/api/req/auth';
import type { Userprops } from './login.type';

interface LoginState {
  isLogged: boolean;
  user: Userprops | null;
}

const initialState: LoginState = {
  isLogged: false,
  user: null,
};

export const fetchLogin = createAsyncThunk<
  Userprops,
  { email: string; password: string },
  { rejectValue: string }
>('login/fetchLogin', async (data, { rejectWithValue }) => {
  try {
    const response = await PostAuth('/auth/login', data);
    return response.data.user as Userprops;
  } catch (err: any) {
    return rejectWithValue(err?.response?.data?.message || 'Ошибка при логине');
  }
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLogged = false;
      state.user = null;
    },

    setUser: (state, action: { payload: Userprops }) => {
      state.user = action.payload;
    },

    toggleFavourite: (state, action: { payload: number }) => {
      if (!state.user) return;

      const userId = action.payload;
      const favs = state.user.favourites ?? [];

      if (favs.includes(userId)) {
        state.user.favourites = favs.filter((id) => id !== userId);
      } else {
        state.user.favourites = [...favs, userId];
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.user = {
        ...action.payload,
        favourites: action.payload.favourites ?? [],
      };
      state.isLogged = true;
    });

    builder.addCase(fetchLogin.rejected, (state) => {
      state.isLogged = false;
      state.user = null;
    });
  },
});

export const { logout, setUser, toggleFavourite } = loginSlice.actions;
export default loginSlice.reducer;
