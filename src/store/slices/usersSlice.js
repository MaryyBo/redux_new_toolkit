import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from 'api';

const SLICE_NAME = 'users';

const getUsers = createAsyncThunk(`${SLICE_NAME}/getUsers`, () => {
    return API.getUsers
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
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
        },
        [getUsers.rejected]: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
})
// export createAsyncThunk result
export { getUsers };

export default userSlice.reducer;