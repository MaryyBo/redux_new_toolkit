import { createSlice } from "@reduxjs/toolkit";
import * as API from 'api';

const SLICE_NAME = 'users';

const initialState = {
    users: [],
    isLoading: false,
    error: null
}

createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        getUsers: (state, action) => {
            //запит на сервер...але не може буди асинхронщини.
        }
    }
})