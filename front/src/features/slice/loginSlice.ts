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
  } catch (err) {
    return rejectWithValue(`Ошибка при логине ${err}`);
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
      console.log('Login successful:', state.user);
    });
    builder.addCase(fetchLogin.rejected, (state) => {
      state.isLogged = false;
      state.user = null;
    });
  },
});

export const { logout, setUser } = loginSlice.actions;
export default loginSlice.reducer;
