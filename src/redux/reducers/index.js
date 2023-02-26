import authReducer from "./authReducer";
import productReducer from "./productReducer";

const rootReducer = {
    products: productReducer,
    auth: authReducer,
}

export default rootReducer