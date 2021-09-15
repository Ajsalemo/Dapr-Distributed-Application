import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Fragment } from "react";
import { Appbar } from "../../components/appbar/appbar";
import { Jumbotron } from "../../jumbotron/jumbotron";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const Landing = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Appbar />
      <div className={classes.root}>
        <Grid container>
          <Jumbotron />
        </Grid>
      </div>
    </Fragment>
  );
};
