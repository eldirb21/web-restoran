import axios from "axios"
import {
  LOGIN_LOAD, LOGIN_SUCCESS, LOGIN_FAILED, REGIST_LOAD,
  REGIST_SUCCESS, REGIST_FAILED, SIGNOUT_LOAD, SIGNOUT_SUCCESS,
  SIGNOUT_FAILED, FORGOT_PASS_LOAD, FORGOT_PASS_SUCCESS, FORGOT_PASS_FAILED,
  RESET_PASS_LOAD, RESET_PASS_SUCCESS, RESET_PASS_FAILED
} from "../../constants/action-type"
import { Http } from '../../constants/axios'

export const doLogin = (body) =>
  async dispatch => {
    dispatch({
      type: LOGIN_LOAD,
      payload: true
    })
    const response = await axios.post('login', body)
    if (response.status === 'success') {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: false,
        response: response
      })
    } else {
      dispatch({
        type: LOGIN_FAILED,
        payload: false,
        errors: response
      })
    }
  }
export const doRegister = (body) =>
  async dispatch => {
    dispatch({
      type: REGIST_LOAD,
      payload: true
    })
    const response = await Http.post('login', body)
    if (response) {
      dispatch({
        type: REGIST_SUCCESS,
        payload: false,
        response: response
      })
    } else {
      dispatch({
        type: REGIST_FAILED,
        payload: false,
        errors: response
      })
    }
  }
export const doSignOut = (body) =>
  async dispatch => {
    dispatch({
      type: SIGNOUT_LOAD,
      payload: true
    })
    const response = await Http.post('login', body)
    if (response) {
      dispatch({
        type: SIGNOUT_SUCCESS,
        payload: false,
        response: response
      })
    } else {
      dispatch({
        type: SIGNOUT_FAILED,
        payload: false,
        errors: response
      })
    }
  }
export const doForgotPass = (body) =>
  async dispatch => {
    dispatch({
      type: FORGOT_PASS_LOAD,
      payload: true
    })
    const response = await Http.post('login', body)
    if (response) {
      dispatch({
        type: FORGOT_PASS_SUCCESS,
        payload: false,
        response: response
      })
    } else {
      dispatch({
        type: FORGOT_PASS_FAILED,
        payload: false,
        errors: response
      })
    }
  }
export const doResetPass = (body) =>
  async dispatch => {
    dispatch({
      type: RESET_PASS_LOAD,
      payload: true
    })
    const response = await Http.post('login', body)
    if (response) {
      dispatch({
        type: RESET_PASS_SUCCESS,
        payload: false,
        response: response
      })
    } else {
      dispatch({
        type: RESET_PASS_FAILED,
        payload: false,
        errors: response
      })
    }
  } 
