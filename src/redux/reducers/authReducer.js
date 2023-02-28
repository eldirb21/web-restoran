import {
  FORGOT_PASS_FAILED,
  FORGOT_PASS_LOAD,
  FORGOT_PASS_SUCCESS,
  LOGIN_FAILED,
  LOGIN_LOAD,
  LOGIN_SUCCESS,
  REGIST_LOAD,
  REGIST_SUCCESS,
  REGIST_FAILED,
  RESET_PASS_FAILED,
  RESET_PASS_LOAD,
  RESET_PASS_SUCCESS,
  SIGNOUT_FAILED,
  SIGNOUT_LOAD,
  SIGNOUT_SUCCESS,
} from "../../constants/action-type";

const initialState = {
  loading: false,
  errors: {},
  data: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOAD:
      return {
        ...state,
        loading: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: action.payload,
        data: action.data,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: action.payload,
        errors: action.errors,
      };

    case REGIST_LOAD:
      return {
        ...state,
        loading: action.payload,
      };
    case REGIST_SUCCESS:
      return {
        ...state,
        loading: action.payload,
        data: action.response,
      };
    case REGIST_FAILED:
      return {
        ...state,
        loading: action.payload,
        errors: action.errors,
      };

    case SIGNOUT_LOAD:
      return {
        ...state,
        loading: action.payload,
      };
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        loading: action.payload,
        data: action.response,
      };
    case SIGNOUT_FAILED:
      return {
        ...state,
        loading: action.payload,
        errors: action.errors,
      };

    case FORGOT_PASS_LOAD:
      return {
        ...state,
        loading: action.payload,
      };
    case FORGOT_PASS_SUCCESS:
      return {
        ...state,
        loading: action.payload,
        data: action.response,
      };
    case FORGOT_PASS_FAILED:
      return {
        ...state,
        loading: action.payload,
        errors: action.errors,
      };

    case RESET_PASS_LOAD:
      return {
        ...state,
        loading: action.payload,
      };
    case RESET_PASS_SUCCESS:
      return {
        ...state,
        loading: action.payload,
        data: action.response,
      };
    case RESET_PASS_FAILED:
      return {
        ...state,
        loading: action.payload,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default authReducer;
