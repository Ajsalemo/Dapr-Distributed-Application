import Grid from "@material-ui/core/Grid";
import JumbotronBikeImage from "../assets/images/jumbotron-bike.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  jumbotronImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  jumbotronGrid: {
    height: "100vh",
  },
}));

export const Jumbotron = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.jumbotronGrid}>
      <img
        src={JumbotronBikeImage}
        alt="Fixed Gear bike"
        className={classes.jumbotronImage}
      />
    </Grid>
  );
};
