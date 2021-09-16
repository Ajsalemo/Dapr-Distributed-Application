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
  },
  appBar: {
    backgroundColor: "transparent",
  },
}));

export const Appbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.appBarRoot}>
      <AppBar position="absolute" className={classes.appBar}>
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
          <Typography variant="h6" className={classes.appBarTitle}>
            <Link to="/gear" className={classes.appBarLink}>
              Gear
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
