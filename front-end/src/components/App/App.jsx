import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register, Chat } from "../../pages";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}
