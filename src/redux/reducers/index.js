import authReducer from "./authReducer";
import employeeReducer from "./employeeReducer";
import productReducer from "./productReducer";

const rootReducer = {
  products: productReducer,
  employee: employeeReducer,
  auth: authReducer,
};

export default rootReducer;
