import React, { FC, useState, useEffect } from 'react';

import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';

import { OverviewBudget } from '../BudgetComponent/BudgetComponent';
import { OverviewTasksProgress } from '../TaskProgressComponent/TaskProgressComponent';
import { OverviewLatestOrders } from '../CaseListComponent/CaseListComponent';
import { Case } from '../../models/Case';
import { fetchCases, fetchCompliance, fetchResultCount } from './GetCases';



const now = new Date();



export const DashboardPage: React.FC = () => {

  
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

    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={6}
          >
            <OverviewBudget
              difference={12}
              positive
              sx={{ height: '100%' }}
              value={resultCount?.toString() || "Loading..."}
            />
          </Grid>
          
          <Grid
            xs={12}
            sm={6}
            lg={6}
          >
            <OverviewTasksProgress
              sx={{ height: '100%' }}
              value={compliance ?? 0}
            />
          </Grid>
          
          
          <Grid
            xs={12}
            md={12}
            lg={12}
          >
            <OverviewLatestOrders
              cases={cases}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>

    );
  };


export default DashboardPage;