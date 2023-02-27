import {
  ADD_EMPLOYEE_FAILED,
  ADD_EMPLOYEE_LOAD,
  ADD_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_FAILED,
  DELETE_EMPLOYEE_LOAD,
  DELETE_EMPLOYEE_SUCCESS,
  EDIT_EMPLOYEE_FAILED,
  EDIT_EMPLOYEE_LOAD,
  EDIT_EMPLOYEE_SUCCESS,
  GET_EMPLOYEEID_FAILED,
  GET_EMPLOYEEID_LOAD,
  GET_EMPLOYEEID_SUCCESS,
  GET_EMPLOYEE_FAILED,
  GET_EMPLOYEE_LOAD,
  GET_EMPLOYEE_SUCCESS,
} from "../../constants/action-type";

const initialState = {
  loading: false,
  employees: [],
  errors: {},
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEE_LOAD:
      return {
        ...state,
        loading: action.isLoading,
      };
    case GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: action.isLoading,
        employees: action.data,
      };

    case GET_EMPLOYEE_FAILED:
      return {
        ...state,
        loading: action.isLoading,
        errors: action.errors,
      };

    case GET_EMPLOYEEID_LOAD:
      return {
        ...state,
        loading: action.isLoading,
      };
    case GET_EMPLOYEEID_SUCCESS:
      return {
        ...state,
        loading: action.isLoading,
        employees: action.data,
      };

    case GET_EMPLOYEEID_FAILED:
      return {
        ...state,
        loading: action.isLoading,
        errors: action.errors,
      };

    case ADD_EMPLOYEE_LOAD:
      return {
        ...state,
        loading: action.isLoading,
      };
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: action.isLoading,
        employees: action.data,
      };

    case ADD_EMPLOYEE_FAILED:
      return {
        ...state,
        loading: action.isLoading,
        errors: action.errors,
      };

    case EDIT_EMPLOYEE_LOAD:
      return {
        ...state,
        loading: action.isLoading,
      };
    case EDIT_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: action.isLoading,
        employees: action.data,
      };

    case EDIT_EMPLOYEE_FAILED:
      return {
        ...state,
        loading: action.isLoading,
        errors: action.errors,
      };

    case DELETE_EMPLOYEE_LOAD:
      return {
        ...state,
        loading: action.isLoading,
      };
    case DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: action.isLoading,
        employees: action.data,
      };

    case DELETE_EMPLOYEE_FAILED:
      return {
        ...state,
        loading: action.isLoading,
        errors: action.errors,
      };

    default:
      return state;
  }
};

export default employeeReducer;
