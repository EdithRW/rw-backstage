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

const statusMap = {
  pending: 'warning',
  delivered: 'success',
  refunded: 'error'
};

interface OverviewLatestOrdersProps {
  orders: Order[];
  sx?: any;
}

export const OverviewLatestOrders: React.FC<OverviewLatestOrdersProps> = (props) => {
  const { orders = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Latest Orders" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Order
                </TableCell>
                <TableCell>
                  Customer
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
              {orders.map((order) => {
                const createdAt = format(order.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={order.id}
                  >
                    <TableCell>
                      {order.ref}
                    </TableCell>
                    <TableCell>
                      {order.customer.name}
                    </TableCell>
                    <TableCell>
                      {createdAt}
                    </TableCell>
                    <TableCell>
                      <SeverityPill color={statusMap[order.status]}>
                        {order.status}
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
  orders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    ref: PropTypes.string.isRequired,
    customer: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    status: PropTypes.oneOf(['pending', 'delivered', 'refunded']).isRequired
  })),
  sx: PropTypes.object
};