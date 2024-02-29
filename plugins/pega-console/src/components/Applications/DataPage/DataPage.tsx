import { Table, TableColumn } from '@backstage/core-components';
import { Grid } from '@material-ui/core';
import React from 'react';


const DataObjects = () => {

    const generateTestData = (rows = 10) => {
        const data = [];
        for (let i = 0; i < rows; i++) {
          data.push({
            id: i.toString(),
            name: `Case Type ${i}`,
            type: "Standard",
            options: `Options ${i}`

          });
        }
        return data;
      };

    const dataObjects = generateTestData(7);

    const columns: TableColumn<typeof dataObjects[0]>[] = [
        { title: 'ID', field: 'id' },
        { title: 'Name', field: 'name' },
        { title: 'Type', field: 'type' },
        { title: 'Options', field: 'options' },

      ];


  return (
    <div>
      <Table
        options={{ paging: false }}
        data={dataObjects}
        columns={columns}
        title="Data"
      />
    </div>
  );


};



export const DataPage = () => (
    <Grid container>
      
        <Grid
          item
          xs={12}
          container
          spacing={2}
          justifyContent="space-between"
          direction="row"
        >
          <Grid item xs={12} md={12}>   {/* -------------------------- Data Objects ---------------------------------- */}
            <DataObjects />
          </Grid>

        </Grid>

    </Grid>
  );