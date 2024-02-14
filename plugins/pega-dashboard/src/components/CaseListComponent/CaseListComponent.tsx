import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { Scrollbar } from '../Scrollbar/Scrollbar';
import { SeverityPill } from '../SeverityPill/SeverityPill';

interface Order {
  id: string;
  ref: string;
  amount: number;
  customer: { name: string };
  createdAt: number;
  status: 'pending' | 'delivered' | 'refunded';
}

interface Case {
  caseID: string;
  operator: string;
  createdAt: number;
  status: 'pending' | 'delivered' | 'refunded';
}

const statusMap = {
  pending: 'warning',
  delivered: 'success',
  refunded: 'error'
};

interface OverviewLatestOrdersProps {
  cases: Case[]| null;
  sx?: any;
}

export const OverviewLatestOrders: React.FC<OverviewLatestOrdersProps> = (props) => {
  const { cases = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Latest Cases" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Case ID
                </TableCell>
                <TableCell>
                  Operator
                </TableCell>
                <TableCell sortDirection="desc">
                  Date
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {cases && cases.map((item) => {
                const createdAt = format(item.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={item.caseID}
                  >
                    <TableCell>
                      {item.caseID}
                    </TableCell>
                    <TableCell>
                      {item.operator}
                    </TableCell>
                    <TableCell>
                      {createdAt}
                    </TableCell>
                    <TableCell>
                      <SeverityPill color={statusMap[item.status]}>
                        {item.status}
                      </SeverityPill>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewLatestOrders.prototype = {
  cases: PropTypes.arrayOf(PropTypes.shape({
    caseID: PropTypes.string.isRequired,
    operator: PropTypes.string.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    status: PropTypes.oneOf(['pending', 'delivered', 'refunded']).isRequired
  })),
  sx: PropTypes.object
};