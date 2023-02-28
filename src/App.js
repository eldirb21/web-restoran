import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AdminSidebar from "./layout/admin-sidebar";
import store from "./redux/store";
import Dashboard from "./views/admin/dashboard";
import Employees from "./views/admin/employees";
import Foods from "./views/admin/foods";
import Histories from "./views/admin/histories";
import Orders from "./views/admin/orders";
import Forgotpass from "./views/auth/forgotpass";
import Signin from "./views/auth/signin";
import Signup from "./views/auth/signup";
import Boarding from "./views/boarding";

const App = () => {
  const [userType, setuserType] = useState("");

  useEffect(() => {
    const items = localStorage.getItem("ROLES");
    const token = localStorage.getItem("TOKEN");

    if (items !== null && token !== null) {
      setuserType(items);
    }
  }, [userType]);

  const rootAdmin = () => {
    return (
      <AdminSidebar>
        <Routes>
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/admin-employees" element={<Employees />} />
          <Route path="/admin-foods" element={<Foods />} />
          <Route path="/admin-orders" element={<Orders />} />
          <Route path="/admin-history" element={<Histories />} />
        </Routes>
      </AdminSidebar>
    );
  };
  const rootUser = () => {
    return (
      <AdminSidebar>
        <Routes>
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/admin-employees" element={<Employees />} />
          <Route path="/admin-foods" element={<Foods />} />
          <Route path="/admin-orders" element={<Orders />} />
          <Route path="/admin-history" element={<Histories />} />
        </Routes>
      </AdminSidebar>
    );
  };
  const rootCustomer = () => {
    return (
      <Routes>
        <Route path="/" element={<Boarding />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgotpass />} />
      </Routes>
    );
  };

  return (
    <Provider store={store}>
      {userType !== "administrator" && userType !== "kasir" && rootCustomer()}
      {userType === "kasir" && rootUser()}
      {userType === "administrator" && rootAdmin()}
    </Provider>
  );
};

export default App;
