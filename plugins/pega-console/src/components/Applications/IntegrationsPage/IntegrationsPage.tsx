import { Table, TableColumn } from '@backstage/core-components';
import { Grid } from '@material-ui/core';
import React from 'react';


const Services = () => {

    const generateTestData = (rows = 10) => {
        const data = [];
        for (let i = 0; i < rows; i++) {
          data.push({
            id: i.toString(),
            name: `Service ${i}`,
            type: "Standard",
          });
        }
        return data;
      };

    const services = generateTestData(4);

    const columns: TableColumn<typeof services[0]>[] = [
        { title: 'ID', field: 'id' },
        { title: 'Name', field: 'name' },
        { title: 'Type', field: 'type' },
      ];


  return (
    <div>
      <Table
        options={{ paging: false }}
        data={services}
        columns={columns}
        title="Services"
      />
    </div>
  );

};

const Connectors = () => {

    const generateTestData = (rows = 10) => {
        const data = [];
        for (let i = 0; i < rows; i++) {
          data.push({
            id: i.toString(),
            name: `Connector ${i}`,
            type: "Standard",
          });
        }
        return data;
      };

    const connectors = generateTestData(4);

    const columns: TableColumn<typeof connectors[0]>[] = [
        { title: 'ID', field: 'id' },
        { title: 'Name', field: 'name' },
        { title: 'Type', field: 'type' },
      ];


  return (
    <div>
      <Table
        options={{ paging: false }}
        data={connectors}
        columns={columns}
        title="Connectors"
      />
    </div>
  );

};



export const IntegrationsPage = () => (
    <Grid container>
      
        <Grid
          item
          xs={12}
          container
          spacing={2}
          justifyContent="space-between"
          direction="row"
        >
          <Grid item xs={12} md={6}>   {/* -------------------------- Services ---------------------------------- */}
            <Services />
          </Grid>

          <Grid item xs={12} md={6}>   {/* -------------------------- Connectors ---------------------------------- */}
            <Connectors />
          </Grid>

        </Grid>

    </Grid>
  );