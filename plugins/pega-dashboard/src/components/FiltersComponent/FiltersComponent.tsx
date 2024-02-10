import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

export const Filters: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <TextField label="Search" variant="outlined" fullWidth />
      {/* Add more filter options here */}
    </Paper>
  );
};

export default Filters;
