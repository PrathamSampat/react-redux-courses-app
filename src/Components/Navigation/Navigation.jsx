import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  makeStyles,
  Menu,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Redux-Course-App
          </Typography>
          <Hidden smDown>
            {/* Hide these buttons on small screens (sm and down) */}
            <Button color="inherit">
              <Link to="/" className={classes.link}>
                Student Dashboard
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/courses" className={classes.link}>
                Course List
              </Link>
            </Button>
          </Hidden>
          <Hidden mdUp>
            {/* Show this button on medium screens (md and up) */}
            <Button
              color="inherit"
              className={classes.menuButton}
              onClick={handleMenuClick}
            >
              Menu
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link to="/" className={classes.link}>
                  Student Dashboard
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/courses" className={classes.link}>
                  Course List
                </Link>
              </MenuItem>
            </Menu>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
