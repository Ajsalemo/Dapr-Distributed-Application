import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Fragment } from "react";
import { Appbar } from "../../components/appbar/appbar";
import { Jumbotron } from "../../components/jumbotron/jumbotron";

const useStyles = makeStyles((theme) => ({
  landingRoot: {
    flexGrow: 1,
  },
}));

export const Landing = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Appbar position="absolute" backgroundColor="transparent" />
      <div className={classes.landingRoot}>
        <Grid container>
          <Jumbotron />
        </Grid>
      </div>
    </Fragment>
  );
};
