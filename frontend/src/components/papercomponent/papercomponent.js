import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: "2rem",
  },
  cardImage: {
    width: "600px",
    height: "700px",
    objectFit: "contain"
  }
});

export const PaperComponent = ({ bike }) => {
  const classes = useStyles();
  if (!bike) return "Loading.."

  return (
    <Grid item xs={2} sm={4} md={4} key={bike.id}>
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
