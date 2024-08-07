import { createSlice } from "@reduxjs/toolkit";
import CONSTANTS from "../../constants";

const { LANGUAGE } = CONSTANTS

const initialState = LANGUAGE.EN_US

const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        setLang: (state, action) => action.payload//action це об'єкт складається з  type та payload
    }
})


const { reducer, actions } = langSlice;

const { setLang } = actions;

export { setLang };
export default reducer;