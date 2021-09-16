import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Fragment } from "react";
import { Appbar } from "../../components/appbar/appbar";
import { Jumbotron } from "../../components/jumbotron/jumbotron";

const useStyles = makeStyles((theme) => ({
  bikesRoot: {
    flexGrow: 1,
  },
}));

export const Bikes = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Appbar />
      <div className={classes.bikesRoot}>
        <Grid container>
          <Jumbotron />
        </Grid>
      </div>
    </Fragment>
  );
};
