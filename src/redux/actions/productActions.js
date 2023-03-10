import {
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_LOAD,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
  DELETE_PRODUCT_LOAD,
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILED,
  EDIT_PRODUCT_LOAD,
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCTID_FAILED,
  GET_PRODUCTID_LOAD,
  GET_PRODUCTID_SUCCESS,
  GET_PRODUCT_FAILED,
  GET_PRODUCT_LOAD,
  GET_PRODUCT_SUCCESS,
} from "../../constants/action-type";
import { GET } from "../../constants/axios";

const getProductList = (params) => (dispatch) => {
  dispatch({
    type: GET_PRODUCT_LOAD,
    isLoading: true,
  });
  return GET("path", params)
    .then((res) => {
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        isLoading: false,
        data: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PRODUCT_FAILED,
        isLoading: false,
        errors: err,
      });
    });
};

const getProductSingle = (params) => (dispatch) => {
  dispatch({
    type: GET_PRODUCTID_LOAD,
    isLoading: true,
  });
  return GET("path", params)
    .then((res) => {
      dispatch({
        type: GET_PRODUCTID_SUCCESS,
        isLoading: false,
        data: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_PRODUCTID_FAILED,
        isLoading: false,
        errors: err,
      });
    });
};

const addProduct = (params) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT_LOAD,
    isLoading: true,
  });
  return GET("path", params)
    .then((res) => {
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        isLoading: false,
        data: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_PRODUCT_FAILED,
        isLoading: false,
        errors: err,
      });
    });
};

const updateProduct = (params) => (dispatch) => {
  dispatch({
    type: EDIT_PRODUCT_LOAD,
    isLoading: true,
  });
  return GET("path", params)
    .then((res) => {
      dispatch({
        type: EDIT_PRODUCT_SUCCESS,
        isLoading: false,
        data: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EDIT_PRODUCT_FAILED,
        isLoading: false,
        errors: err,
      });
    });
};
const deleteProduct = (params) => (dispatch) => {
  dispatch({
    type: DELETE_PRODUCT_LOAD,
    isLoading: true,
  });
  return GET("path", params)
    .then((res) => {
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        isLoading: false,
        data: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_PRODUCT_FAILED,
        isLoading: false,
        errors: err,
      });
    });
};

export {
  getProductList,
  getProductSingle,
  addProduct,
  updateProduct,
  deleteProduct,
};
