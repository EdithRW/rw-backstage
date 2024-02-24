import React from 'react';
import { useTable } from 'react-table';
import { Link } from 'react-router-dom';

const columns = [
  {
    Header: 'ID',
    accessor: (row: { id: number }) => row.id,
  },
  {
    Header: 'Name',
    accessor: (row: { name: string; id: number }) => (
      <Link to={`/rw-pega/applications/${row.id}`}>{row.name}</Link>
    ),
  },
];

const data = [
  {
    id: 1,
    name: 'Application 1',
    // Add more data here
  },
  {
    id: 3,
    name: 'Application 2',
    // Add more data here
  },
  {
    id: 4,
    name: 'Application 3',
    // Add more data here
  },
  {
    id: 5,
    name: 'Application 4',
    // Add more data here
  },
  // Add more data here
];

const ApplicationTable: React.FC = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ApplicationTable;