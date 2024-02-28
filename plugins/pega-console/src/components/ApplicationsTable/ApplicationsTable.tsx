import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link, Table, TableColumn } from '@backstage/core-components';
import { useParams } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    container: {
      
  },
    empty: {
      padding: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center',
    },
  }));


  const generateTestData: (number: number) => Array<{}> = (rows = 10) => {
    const data: Array<{}> = [];
    while (data.length <= rows) {
      data.push({
        col1: `Some value ${data.length}`,
        col2: `More data ${data.length}`,
        subvalue: `Subvalue ${data.length}`,
        number: Math.round(Math.abs(Math.sin(data.length)) * 1000),
        date: new Date(Math.abs(Math.sin(data.length)) * 10000000000000),
      });
    }
  
    return data;
  };
  
  const testData10 = generateTestData(10);


  const ApplicationsTable = () => {
    const classes = useStyles();
    const columns: TableColumn<{}>[] = [
      {
        title: 'Name',
        field: 'col1',
        highlight: true,
        render: (row) => {
          const { applicationId } = useParams();
          return (
            <Link
              to={`/pega-console/applications/${row.id || applicationId}`}
              underline="none"
              aria-label="Home"
            >
              {row.col1}
            </Link>
          );
        },
      },
      {
        title: 'System',
        field: 'col2',
      },
      {
        title: 'Score Card',
        field: 'number',
        type: 'string',
      },
      {
        title: 'Test Coverage',
        field: 'date',
        type: 'date',
      },
    ];
  
    return (
      <div className={classes.container}>
        <Table
          options={{ paging: false }}
          data={testData10}
          columns={columns}
          title="Backstage Table"
        />
      </div>
    );
  };

  export default ApplicationsTable;