import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const hashPassword = (password) => btoa(password);

// register
export const registerThunk = createAsyncThunk(
  "auth/register",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const exists = users.find((u) => u.email === email);
      if (exists) {
        return rejectWithValue("Email sudah terdaftar");
      }

      const newUser = {
        email,
        password: hashPassword(password),
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // Redux TERIMA DATA AMAN
      return { email };
    } catch (err) {
      console.error(err);
      return rejectWithValue("Register gagal");
    }
  }
);

// login
export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(
        (u) => u.email === email && u.password === hashPassword(password)
      );

      if (!user) {
        return rejectWithValue("Email atau password salah");
      }

      const safeUser = { email };

      localStorage.setItem("currentUser", JSON.stringify(safeUser));

      return safeUser;
    } catch (err) {
      console.error(err);
      return rejectWithValue("Login gagal");
    }
  }
);

const initialState = {
  users: [], // ✅ semua user
  currentUser: null, // { email }
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    logout(state) {
      state.currentUser = null;
      state.isAuthenticated = false;
      localStorage.removeItem("currentUser");
    },
    loadUserFromStorage(state) {
      const user = JSON.parse(localStorage.getItem("currentUser"));
      if (user) {
        state.currentUser = user;
        state.isAuthenticated = true;
      }
    },
    loadUsersFromStorage(state) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      state.users = users.map((u) => ({ email: u.email })); // 🔒 strip password
    },
  },
  extraReducers: (builder) => {
    builder
      /* REGISTER */
      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload); // ✅ simpan ke users
        state.currentUser = action.payload; // auto login
        state.isAuthenticated = true;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* LOGIN */
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, loadUserFromStorage, loadUsersFromStorage, clearError } =
  authSlice.actions;

export default authSlice.reducer;
