import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { ProtectedRoute } from "./ProtectedRoute";

export function RouterMain() {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home></Home>}></Route>
      </Route>
      <Route path="*" element={<Navigate to="login" />}></Route>
    </Routes>
  );
}
