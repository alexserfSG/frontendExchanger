import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {accessToken: null},
    reducers: {
        setUser(state,token) {
            state.accessToken = token;
            // state.userId = action.payload.userId;
            // state.userHash = action.payload.userHash;
        },
        logOut(state) {
            state.accessToken = null;
            // state.userId = null;
            // state.userHash = null;
        }
    }
})

export const {setUser, logOut} = userSlice.actions;

export default userSlice.reducer;

// export const getUserId = (state) => state.user.userId;
// export const getUserToken = (state) => state.user.userHash;
// export const getUserAuth = (state) => state.user.accessToken;