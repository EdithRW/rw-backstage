import React from 'react';
import { Link } from 'react-router-dom';
import { ListItemText } from '@mui/material';
import { ListItemIcon, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    height: 56,
    paddingLeft: 16,
    paddingRight: 16,
    borderBottom: '1px solid #ddd',
    '&:last-child': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
  menuItemIcon: {
    marginRight: 16,
    minWidth: 32,
  },
});

interface SideMenuProps {
  to: string;
  icon: string;
  label: string;
}

const SideMenu: React.FC<SideMenuProps> = ({ to, icon, label }) => {
  const classes = useStyles();

  return (
    <Link to={to} className={classes.menuItem}>

      <ListItemText primary={label} />
    </Link>
  );
};

export default SideMenu;