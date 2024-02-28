import { Grid } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { HomePage } from '../HomePage';
import { ApplicationLanding } from '../Pages/ApplicationLanding/ApplicationLanding';

const LandingPage = () => (
  <div className="landing-page">
    <h1>Welcome to Our Website</h1>
    <p>This is a simple landing page built using React.</p>
  </div>
);

const SignUpPage = () => (
  <div className="signup-page">
    <h1>Sign Up</h1>
    {/* Add your sign up form here */}
  </div>
);

const LoginPage = () => (
  <div className="login-page">
    <h1>Log In</h1>
    {/* Add your login form here */}
  </div>
);

export const PegaConsoleApp = () => {
  return (
    <BrowserRouter>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Pega Console App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/pega-console/home">Home</Link>
              </li>
              <li>
                <Link to="/pega-console/applications">Applications</Link>
              </li>
              <li>
                <Link to="/pega-console/applications/1">Application 123</Link>
              </li>
            </ul>
          </nav>
        </Grid>
        <Grid item xs={12}>
          <Routes>
            <Route path="/pega-console/applications/:applicationId" element={<ApplicationLanding />} />            
            <Route path="/pega-console/applications" element={<LoginPage />} />
            <Route path="/pega-console/home" element={<HomePage />} />
            {/* Add more routes here for other pages */}
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};