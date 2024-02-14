import React, { useEffect, useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { OverviewLatestOrders } from '../CaseListComponent';


import { OverviewBudget } from '../BudgetComponent/BudgetComponent';
import { OverviewTasksProgress } from '../TaskProgressComponent/TaskProgressComponent';
import { Case } from '../../models/Case';
import { fetchCases, fetchResultCount, fetchCompliance } from './GetCases';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    height: '100%',
  },
}));

export const DashboardPage: React.FC = () => {
  const classes = useStyles();
  
  const [cases, setCases] = useState<Case[] | null>(null);
  const [resultCount, setResultCount] = useState<number | null>(null);
  const [compliance, setCompliance] = useState<number | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const casesData = await fetchCases();
      setCases(casesData);
      
      const resultCountData = await fetchResultCount();
      setResultCount(resultCountData);
      
      const complianceData = await fetchCompliance();
      setCompliance(complianceData);
      
      
    };
    
    fetchData();
  }, []);
  
  return (
    
    <Grid container spacing={3}>

      <Grid item xs={3}>
        <Paper className={classes.paper} elevation={1}>
          <OverviewTasksProgress
            sx={{ height: '100%' }}
            value={compliance  ?? 0}
          />
        </Paper>
      </Grid>

      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <OverviewBudget
            difference={100}
            positive
            sx={{ height: '100%' }}
            value={resultCount?.toString() || "Loading..."}
          />
        </Paper>
      </Grid>
    
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <OverviewLatestOrders
            cases={cases}
            sx={{ height: '100%' }}
          />
        </Paper>
      </Grid>

    </Grid>
    );
  };
  
  export default DashboardPage;
  