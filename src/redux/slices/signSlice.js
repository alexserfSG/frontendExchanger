import {createAction, createReducer} from "@reduxjs/toolkit";
import {CONFIRM, LOGIN, REGISTER} from "../types";

const initialState = {
    page: LOGIN,
    email: ''
}

export const pageLogin = createAction(LOGIN)
export const pageRegister = createAction(REGISTER)
export const pageConfirm = createAction(CONFIRM)

export default createReducer(initialState,{
    [pageLogin] : function (state) {
      state.page = LOGIN
    },
    [pageRegister] : function (state) {
        state.page = REGISTER
    },
    [pageConfirm] : function (state, email) {
        state.page = CONFIRM
        state.email = email
    },
})