import React from 'react';
import { Table, TableColumn } from '@backstage/core-components';
import { Link } from 'react-router-dom';

const generateTestData = (rows = 10) => {
  const data = [];
  for (let i = 0; i < rows; i++) {
    data.push({
      id: i.toString(),
      name: `Application ${i}`,
      system: `System ${i}`,
      scoreCard: `Score Card ${i}`,
      testCoverage: `Test Coverage ${i}`,
    });
  }
  return data;
};

export const ApplicationsTable = () => {
  
  const applications = generateTestData(10);

  const columns: TableColumn<typeof applications[0]>[] = [
    {
      title: 'Name',
      field: 'name',
      render: (row) => (
        <Link to={`/pega-console/applications/${row.id}`}>
          {row.name}
        </Link>
      ),
    },
    { title: 'System', field: 'system' },
    { title: 'Score Card', field: 'scoreCard' },
    { title: 'Test Coverage', field: 'testCoverage' },
  ];

  return (
    <div>
      <Table
        options={{ paging: false }}
        data={applications}
        columns={columns}
        title="Applications"
      />
    </div>
  );
};