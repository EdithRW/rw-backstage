import { Table, TableColumn } from '@backstage/core-components';
import { Grid } from '@material-ui/core';
import React from 'react';


const Cases = () => {

    const generateTestData = (rows = 10) => {
        const data = [];
        for (let i = 0; i < rows; i++) {
          data.push({
            id: i.toString(),
            name: `Case Type ${i}`,
            type: "Standard",
            refData: `Ref Data ${i}`,
          });
        }
        return data;
      };

    const cases = generateTestData(4);

    const columns: TableColumn<typeof cases[0]>[] = [
        { title: 'ID', field: 'id' },
        { title: 'Name', field: 'name' },
        { title: 'Type', field: 'type' },
        { title: 'Reference Data', field: 'refData' },
      ];


  return (
    <div>
      <Table
        options={{ paging: false }}
        data={cases}
        columns={columns}
        title="Cases"
      />
    </div>
  );


};



export const CasesPage = () => (
    <Grid container>
      
        <Grid
          item
          xs={12}
          container
          spacing={2}
          justifyContent="space-between"
          direction="row"
        >
          <Grid item xs={12} md={12}>   {/* -------------------------- Branches ---------------------------------- */}
            <Cases />
          </Grid>

        </Grid>

    </Grid>
  );