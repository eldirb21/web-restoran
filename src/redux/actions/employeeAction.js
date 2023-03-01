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
import { DELETE, GET, POST } from "../../constants/axios";

const getEmployeeList = () => (dispatch) => {
  dispatch({
    type: GET_EMPLOYEE_LOAD,
    isLoading: true,
  });
  return GET("data-user")
    .then((res) => {
      dispatch({
        type: GET_EMPLOYEE_SUCCESS,
        isLoading: false,
        data: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_EMPLOYEE_FAILED,
        isLoading: false,
        errors: err.message,
      });
    });
};

const getEmployeeSingle = (params) => (dispatch) => {
  dispatch({
    type: GET_EMPLOYEEID_LOAD,
    isLoading: true,
  });
  return GET("path", params)
    .then((res) => {
      dispatch({
        type: GET_EMPLOYEEID_SUCCESS,
        isLoading: false,
        data: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_EMPLOYEEID_FAILED,
        isLoading: false,
        errors: err,
      });
    });
};

const addEmployee = (params) => (dispatch) => {
  dispatch({
    type: ADD_EMPLOYEE_LOAD,
    isLoading: true,
  });
  return POST("add-user", params)
    .then((res) => {
      dispatch({
        type: ADD_EMPLOYEE_SUCCESS,
        isLoading: false,
        data: res.data.message,
      });
      dispatch(getEmployeeList());
    })
    .catch((err) => {
      dispatch({
        type: ADD_EMPLOYEE_FAILED,
        isLoading: false,
        errors: err.message,
      });
    });
};

const updateEmployee = (params) => (dispatch) => {
  dispatch({
    type: EDIT_EMPLOYEE_LOAD,
    isLoading: true,
  });
  return GET("path", params)
    .then((res) => {
      dispatch({
        type: EDIT_EMPLOYEE_SUCCESS,
        isLoading: false,
        data: res.data,
      });
      dispatch(getEmployeeList());
    })
    .catch((err) => {
      dispatch({
        type: EDIT_EMPLOYEE_FAILED,
        isLoading: false,
        errors: err.message,
      });
    });
};
const deleteEmployee = (params) => (dispatch) => {
  dispatch({
    type: DELETE_EMPLOYEE_LOAD,
    isLoading: true,
  });
  return DELETE("delete-user", params)
    .then((res) => {
      dispatch({
        type: DELETE_EMPLOYEE_SUCCESS,
        isLoading: false,
        data: res.data.message,
      });
      dispatch(getEmployeeList());
    })
    .catch((err) => {
      dispatch({
        type: DELETE_EMPLOYEE_FAILED,
        isLoading: false,
        errors: err.message,
      });
    });
};

const clearDeleteEmployee = () => (dispatch) => {
  dispatch({
    type: DELETE_EMPLOYEE_SUCCESS || DELETE_EMPLOYEE_FAILED,
    isLoading: false,
    data: null,
    errors: {},
  });
};

export {
  getEmployeeList,
  getEmployeeSingle,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  clearDeleteEmployee,
};
