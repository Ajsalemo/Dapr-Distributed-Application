import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginTop: "2rem",
  },
  cardImage: {
    width: "300px",
    height: "400px",
    objectFit: "contain",
    [theme.breakpoints.up("sm")]: {
      width: "600px",
      height: "700px",
      objectFit: "contain",
    },
  },
}));

export const PaperComponent = ({ bike }) => {
  const classes = useStyles();

  return (
    <Grid item key={bike.id}>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          className={classes.cardImage}
          image={bike.image}
          alt={bike.model}
        />
        <CardContent>
          <Typography variant="subtitle1" color="text.secondary">
            {bike.model} - ${bike.price}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
