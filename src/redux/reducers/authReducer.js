import {
  FORGOT_PASS_FAILED, FORGOT_PASS_LOAD, FORGOT_PASS_SUCCESS,
  LOGIN_FAILED, LOGIN_LOAD, LOGIN_SUCCESS,
  REGIST_LOAD, REGIST_SUCCESS, REGIST_FAILED,
  RESET_PASS_FAILED, RESET_PASS_LOAD, RESET_PASS_SUCCESS,
  SIGNOUT_FAILED, SIGNOUT_LOAD, SIGNOUT_SUCCESS
} from "../../constants/action-type"

const initialState = {
  loading: false,
  errors: {},
  data: []
}

export default (state = initialState, { type, payload, response, errors }) => {
  // console.log('payload = ', type, payload, response, errors);
  switch (type) {

    case LOGIN_LOAD:
      return {
        ...state,
        loading: payload.payload
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: payload.payload,
        data: payload.response
      }
    case LOGIN_FAILED:
      return {
        ...state,
        loading: payload.payload,
        errors: payload.errors
      }

    case REGIST_LOAD:
      return {
        ...state,
        loading: payload.payload
      }
    case REGIST_SUCCESS:
      return {
        ...state,
        loading: payload.payload,
        data: payload.response
      }
    case REGIST_FAILED:
      return {
        ...state,
        loading: payload.payload,
        errors: payload.errors
      }

    case SIGNOUT_LOAD:
      return {
        ...state,
        loading: payload.payload
      }
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        loading: payload.payload,
        data: payload.response
      }
    case SIGNOUT_FAILED:
      return {
        ...state,
        loading: payload.payload,
        errors: payload.errors
      }

    case FORGOT_PASS_LOAD:
      return {
        ...state,
        loading: payload.payload
      }
    case FORGOT_PASS_SUCCESS:
      return {
        ...state,
        loading: payload.payload,
        data: payload.response
      }
    case FORGOT_PASS_FAILED:
      return {
        ...state,
        loading: payload.payload,
        errors: payload.errors
      }

    case RESET_PASS_LOAD:
      return {
        ...state,
        loading: payload.payload
      }
    case RESET_PASS_SUCCESS:
      return {
        ...state,
        loading: payload.payload,
        data: payload.response
      }
    case RESET_PASS_FAILED:
      return {
        ...state,
        loading: payload.payload,
        errors: payload.errors
      }
    default:
      return state
  }
}
