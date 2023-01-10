import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import BusinessPage from '../pages/business';
import CapitalInvestment from '../pages/capital';
import Citizenship from '../pages/citizenship';
import Company from '../pages/company';
import Contact from '../pages/contact';
import BusinessTemplateForm from '../pages/forms/businessTemplateForm';

import Home from '../pages/home';
import HomeContainer from '../pages/homeContainer';
import Marketing from '../pages/marketing';
import BusinessConsultancyForm from '../pages/forms/businessConsultancyForm';
import CitizenshipTemplateForm from '../pages/forms/citizenshipTemplateForm';
import CompanyTemplateForm from '../pages/forms/companyTemplateForm';
import Success from '../pages/success';
import Confirmation from '../pages/confirmation';

const routes = [
  {
    path: "/", component: <HomeContainer />, children: [
      { path: "/", component: <Home /> },
      { path: "business", component: <BusinessPage /> },
      { path: "capitalInvestment", component: <CapitalInvestment /> },
      { path: "company", component: <Company /> },
      { path: "citizenship", component: <Citizenship /> },
      { path: "marketing", component: <Marketing /> },
      { path: "contact", component: <Contact /> },
      { path: "success", component: <Success /> },
      { path: "confirmation", component: <Confirmation /> },

      // Forms
      { path: "businessTemplate", component: <BusinessTemplateForm /> },
      { path: "businessConsultancyTemplate", component: <BusinessConsultancyForm /> },
      { path: "citizenshipTemplate", component: <CitizenshipTemplateForm /> },
      { path: "companyTemplate", component: <CompanyTemplateForm /> },

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