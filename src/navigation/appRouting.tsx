import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from '../pages/home';

const routes = [
  { path: "/", component: <Home /> },
];
const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component }) => (
          <Route
            key={Math.random()}
            path={path}
            element={
              component
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouting