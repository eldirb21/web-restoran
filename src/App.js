import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import store from "./redux/store";
import Dashboard from "./views/admin/dashboard";
import Forgotpass from "./views/auth/forgotpass";
import Signin from "./views/auth/signin";
import Signup from "./views/auth/signup";
import Boarding from "./views/boarding";
import '../src/styles/global-styles.css'
const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Boarding />} />
        {/* <Route path="/sign-up" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgotpass />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/sign-in" element={<Signin />}> */}
          {/* <Route
        path="messages"
        element={<DashboardMessages />}
      />
      <Route path="tasks" element={<DashboardTasks />} /> */}
        {/* </Route> */}
        {/* <Route path="about" element={<AboutPage />} /> */}
      </Routes>
    </Provider>
  );
};

export default App;
