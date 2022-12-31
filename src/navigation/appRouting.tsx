import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import BusinessPage from '../pages/business';
import CapitalInvestment from '../pages/capital';
import Company from '../pages/company';

import Home from '../pages/home';
import HomeContainer from '../pages/homeContainer';

const routes = [
  {
    path: "/javabp", component: <HomeContainer />, children: [
      { path: "/javabp", component: <Home /> },
      { path: "/javabp/business", component: <BusinessPage /> },
      { path: "/javabp/capitalInvestment", component: <CapitalInvestment /> },
      { path: "/javabp/company", component: <Company /> }
    ]
  },

];
const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>

        {routes.map(({ path, component, children }) => (
          <Route
            key={Math.random()}
            path={path}
            element={
              component
            }
          >

            {
              children.map(({ path, component }) => (
                <Route
                  key={Math.random()}
                  path={path}
                  element={
                    component
                  }
                />
              ))
            }
          </Route>
        ))}
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouting