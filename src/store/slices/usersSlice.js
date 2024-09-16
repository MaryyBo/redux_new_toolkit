import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from 'api';

const SLICE_NAME = 'users';

const getUsers = createAsyncThunk(`${SLICE_NAME}/getUsers`, async (arg) => {
    console.log(`arg is ${arg}`);
    return API.getUsers();
})

//users/getUsers/fullfiled
//users/getUsers/pending
//users/getUsers/rejected


const initialState = {
    users: [],
    isLoading: false,
    error: null
}

const userSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    // reducers: {
    //     getUsers: (state, action) => {
    //         //запит на сервер...але не може буди асинхронщини.
    //     }
    // },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload
        })
    }
})
// export createAsyncThunk result
export { getUsers };

export default userSlice.reducer;