import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Appbar } from "../../components/appbar/appbar";
import { Fragment } from "react"

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
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};
