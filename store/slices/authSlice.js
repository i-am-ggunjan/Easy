// authSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
    user: null,
    token: null,
    loading: 'idle',
    error: null,
};

// Define your authentication API endpoints here.
// You can use createAsyncThunk to handle async actions.

export const loginAsync = createAsyncThunk('auth/login', async (credentials) => {
    // Make a POST request to your authentication API to log in
    const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }
    const data = await response.json();
    return data;
});

export const logoutAsync = createAsyncThunk('auth/logout', async () => {
    // Make a POST request to your authentication API to log out
    await fetch('/api/logout', {
        method: 'POST',
    });
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Define synchronous actions like setUser and clearUser
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        // Handle the asynchronous actions here
        builder
            .addCase(loginAsync.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.loading = 'rejected';
                state.error = action.error.message;
            })
            .addCase(logoutAsync.fulfilled, (state) => {
                state.user = null;
                state.token = null;
            });
    },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
