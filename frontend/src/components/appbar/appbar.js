import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBarRoot: {
    flexGrow: 1,
  },
  appBarTitle: {
    marginRight: "3rem",
  },
  appBarLink: {
    color: "#fff",
    textDecoration: "none",
  }
}));

export const Appbar = ({ position, backgroundColor }) => {
  const classes = useStyles();

  return (
    <div className={classes.appBarRoot}>
      <AppBar position={position} style={{ backgroundColor: backgroundColor }}>
        <Toolbar>
          <Typography variant="h6" className={classes.appBarTitle}>
            <Link to="/" className={classes.appBarLink}>
              Home
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.appBarTitle}>
            <Link to="/bikes" className={classes.appBarLink}>
              Bikes
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
