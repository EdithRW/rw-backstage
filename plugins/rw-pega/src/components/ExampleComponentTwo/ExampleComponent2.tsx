import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Grid, Box } from '@mui/material';
import ApplicationTable from '../ApplicationTable/ApplicationTable';
import ApplicationLandingPage from '../ApplicationLandingPage/ApplicationLandingPage';
import { ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#3f51b5',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    height: 56,
    paddingLeft: 16,
    paddingRight: 16,
    borderBottom: '1px solid #ddd',
    '&:last-child': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
  menuItemIcon: {
    marginRight: 16,
    minWidth: 32,
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

const SideMenu = () => {
  const classes = useStyles();

  return (
    <Box className={classes.menu}>
      <Box className={classes.menuItem} component={Link} to="/rw-pega/applications">
        <ListItemIcon className={classes.menuItemIcon}>
          <img src="/apps-icon.png" alt="Applications" />
        </ListItemIcon>
        <ListItemText primary="Applications" />
      </Box>
      <Box className={classes.menuItem} component={Link} to="/rw-pega/systems">
        <ListItemIcon className={classes.menuItemIcon}>
          <img src="/sys-icon.png" alt="Systems" />
        </ListItemIcon>
        <ListItemText primary="Systems" />
      </Box>
      <Box className={classes.menuItem} component={Link} to="/rw-pega/services">
        <ListItemIcon className={classes.menuItemIcon}>
          <img src="/services-icon.png" alt="Services" />
        </ListItemIcon>
        <ListItemText primary="Services" />
      </Box>
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
          <Grid item xs={2} className={classes.menu}>
            <SideMenu />
          </Grid>
          <Grid item xs={10} className={classes.content}>
            <Routes>
              <Route path="/rw-pega/applications/:applicationId" element={<ApplicationLandingPage />} />
              <Route path="/rw-pega/applications" element={<ApplicationTable />} />
              {/* Add more routes here for other pages */}
            </Routes>
          </Grid>
        </Grid>
      </div>
    </BrowserRouter>
  );
};