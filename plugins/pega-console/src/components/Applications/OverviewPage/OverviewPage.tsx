import { GaugeCard, Table, TableColumn } from '@backstage/core-components';
import { Grid } from '@material-ui/core';
import React from 'react';


const GuardrailScore = () => (

    <GaugeCard
        title="Guardrail Score Card"
        subheader="This should be above 90%"
        progress={0.93}
    />

);

const BuiltOnApps = () => {

    const generateTestData = (rows = 10) => {
        const data = [];
        for (let i = 0; i < rows; i++) {
          data.push({
            id: i.toString(),
            name: `Application ${i}`,
            version: `Version ${i}`,
          });
        }
        return data;
      };

    const applications = generateTestData(3);

    const columns: TableColumn<typeof applications[0]>[] = [
        {
          title: 'Name',
          field: 'name',
          
        },
        { title: 'Version', field: 'version' },
      ];


  return (
    <div>
      <Table
        options={{ paging: false }}
        data={applications}
        columns={columns}
        title="Built On Applications"
      />
    </div>
  );


};

const AppComponents = () => {

    const generateTestData = (rows = 10) => {
        const data = [];
        for (let i = 0; i < rows; i++) {
          data.push({
            id: i.toString(),
            name: `Component ${i}`,
            version: `Version ${i}`,
          });
        }
        return data;
      };

    const applications = generateTestData(3);

    const columns: TableColumn<typeof applications[0]>[] = [
        {
          title: 'Name of Item',
          field: 'name',
          
        },
        { title: 'Version', field: 'version' },
      ];


  return (
    <div>
      <Table
        options={{ paging: false }}
        data={applications}
        columns={columns}
        title="Components"
      />
    </div>
  );


};

const Rulesets = () => {

    const generateTestData = (rows = 10) => {
        const data = [];
        for (let i = 0; i < rows; i++) {
          data.push({
            id: i.toString(),
            name: `Ruleset ${i}`,
            version: `Version ${i}`,
          });
        }
        return data;
      };

    const rulesets = generateTestData(3);

    const columns: TableColumn<typeof rulesets[0]>[] = [
        {
          title: 'Name of Item',
          field: 'name',
          
        },
        { title: 'Version', field: 'version' },
      ];


  return (
    <div>
      <Table
        options={{ paging: false }}
        data={rulesets}
        columns={columns}
        title="Rulesets"
      />
    </div>
  );


};



export const OverviewPage = () => (
    <Grid container>
      


        <Grid
          item
          xs={12}
          container
          spacing={2}
          justifyContent="space-between"
          direction="row"
        >
          <Grid item xs={12} md={3}>   {/* -------------------------- Guardrail Score ---------------------------------- */}
            <GuardrailScore />
          </Grid>
          <Grid item xs={12} md={4}>    {/* -------------------------- Built On Applications ---------------------------------- */}
            <BuiltOnApps />
          </Grid>
          <Grid item xs={12} md={4}>    {/* -------------------------- Components ---------------------------------- */}
            <AppComponents />
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          container
          spacing={2}
          justifyContent="space-between"
          direction="row"
        >
          <Grid item xs={12} md={6}>   {/* -------------------------- Rulesets ---------------------------------- */}
            <Rulesets />
          </Grid>
          <Grid item xs={12} md={6}>    {/* -------------------------- TODO: Aplication Layers ?? !!!!!!!!!!!!!!!!!!!!!!!! */}
            <BuiltOnApps />
          </Grid>

        </Grid>

    </Grid>
  );