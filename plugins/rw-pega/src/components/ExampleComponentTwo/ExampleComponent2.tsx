import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Grid, Box } from '@mui/material';
import SideMenu from '../SideMenu/SideMenu';
import ApplicationTable from '../ApplicationTable/ApplicationTable';
import ApplicationLandingPage from '../ApplicationLandingPage/ApplicationLandingPage';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#3f51b5',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    width: 240,
  },
  content: {
    padding: 16,
  },
});

const SideMenuInt = () => {
  return (
    <Box>
      <SideMenu to="/rw-pega/applications" icon="/apps-icon.png" label="Applications" />
      <SideMenu to="/rw-pega/systems" icon="/sys-icon.png" label="Systems" />
      <SideMenu to="/rw-pega/services" icon="/services-icon.png" label="Services" />
      {/* Add more links here for other menu items */}
    </Box>
  );
};

export const DeveloperDashboard = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" >
              Developer Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container>
          
          <Grid item xs={10} className={classes.content}>
            <Routes>
              <Route path="/rw-pega/applications/:applicationId" element={<ApplicationLandingPage />} />
              <Route path="/rw-pega" element={<ApplicationTable />} />
              {/* Add more routes here for other pages */}
            </Routes>
          </Grid>
        </Grid>
      </div>
    </BrowserRouter>
  );
};