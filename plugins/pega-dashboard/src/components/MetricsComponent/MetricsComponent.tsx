import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

export const Metrics: React.FC = () => {
  const classes = useStyles();

  // Mock data
  const metricsData = {
    totalCases: 100,
    averageResolutionTime: '2 days',
    // Add more metrics as needed
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6">Metrics</Typography>
      <Typography>Total Cases: {metricsData.totalCases}</Typography>
      <Typography>Average Resolution Time: {metricsData.averageResolutionTime}</Typography>
      {/* Add more metrics display here */}
    </Paper>
  );
};

export default Metrics;
