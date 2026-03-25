import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./views/Homepage";
import Info from "./views/Info";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Layout from "./views/layouts/Layout";
import AuthLayout from "./views/layouts/Auth-layout";
import PostDetail from "./views/Post_Detail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="info" element={<Info />} />
          <Route path="posts/:id" element={<PostDetail />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
