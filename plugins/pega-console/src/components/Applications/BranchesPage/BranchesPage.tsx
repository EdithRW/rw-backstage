import { Table, TableColumn } from '@backstage/core-components';
import { Grid } from '@material-ui/core';
import React from 'react';


const Branches = () => {

    const generateTestData = (rows = 10) => {
        const data = [];
        for (let i = 0; i < rows; i++) {
          data.push({
            id: i.toString(),
            name: `Application ${i}`,
            guardrails: "80%",
            coverage: "20%",
            warnings: i.toString(),
          });
        }
        return data;
      };

    const branches = generateTestData(4);

    const columns: TableColumn<typeof branches[0]>[] = [
        { title: 'Name', field: 'name' },
        { title: 'Guardrails', field: 'guardrails' },
        { title: 'Test Coverage', field: 'coverage' },
        { title: 'Severe Warnings', field: 'warnings' },
      ];


  return (
    <div>
      <Table
        options={{ paging: false }}
        data={branches}
        columns={columns}
        title="Branches"
      />
    </div>
  );


};



export const BranchesPage = () => (
    <Grid container>
      
        <Grid
          item
          xs={12}
          container
          spacing={2}
          justifyContent="space-between"
          direction="row"
        >
          <Grid item xs={12} md={8}>   {/* -------------------------- Branches ---------------------------------- */}
            <Branches />
          </Grid>

        </Grid>

    </Grid>
  );