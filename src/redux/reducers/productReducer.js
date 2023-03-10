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

const initialState = {
  loading: false,
  foods: [],
  errors: {},
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LOAD:
      return {
        ...state,
        loading: action.isLoading,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: action.isLoading,
        foods: action.data,
      };

    case GET_PRODUCT_FAILED:
      return {
        ...state,
        loading: action.isLoading,
        errors: action.errors,
      };

    case GET_PRODUCTID_LOAD:
      return {
        ...state,
        loading: action.isLoading,
      };
    case GET_PRODUCTID_SUCCESS:
      return {
        ...state,
        loading: action.isLoading,
        foods: action.data,
      };

    case GET_PRODUCTID_FAILED:
      return {
        ...state,
        loading: action.isLoading,
        errors: action.errors,
      };

    case ADD_PRODUCT_LOAD:
      return {
        ...state,
        loading: action.isLoading,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: action.isLoading,
        foods: action.data,
      };

    case ADD_PRODUCT_FAILED:
      return {
        ...state,
        loading: action.isLoading,
        errors: action.errors,
      };

    case EDIT_PRODUCT_LOAD:
      return {
        ...state,
        loading: action.isLoading,
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: action.isLoading,
        foods: action.data,
      };

    case EDIT_PRODUCT_FAILED:
      return {
        ...state,
        loading: action.isLoading,
        errors: action.errors,
      };

    case DELETE_PRODUCT_LOAD:
      return {
        ...state,
        loading: action.isLoading,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: action.isLoading,
        foods: action.data,
      };

    case DELETE_PRODUCT_FAILED:
      return {
        ...state,
        loading: action.isLoading,
        errors: action.errors,
      };

    default:
      return state;
  }
};
export default productReducer;
