import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Fragment } from "react";
import { Appbar } from "../../components/appbar/appbar";
import { Jumbotron } from "../../components/jumbotron/jumbotron";
import { useEffect, useState } from "react";
import axios from "axios"

const useStyles = makeStyles((theme) => ({
  bikesRoot: {
    flexGrow: 1,
  },
}));

export const Bikes = () => {
  const classes = useStyles();
  const [statefulHealthResponse, setHealthResponse] = useState(null)
  useEffect(() => {
    async function getHealthResponseFromDapr() {
      const healthResponse = await axios.get('/api/health')
      setHealthResponse(healthResponse);
    }
    getHealthResponseFromDapr()
  }, [])

  return (
    <Fragment>
      <Appbar />
      <div className={classes.bikesRoot}>
        <Grid container>
          {statefulHealthResponse ?? "Unsuccessful response"}
          <Jumbotron />
        </Grid>
      </div>
    </Fragment>
  );
};
