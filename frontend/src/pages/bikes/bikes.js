import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Fragment } from "react";
import { Appbar } from "../../components/appbar/appbar";
import { PaperComponent } from "../../components/papercomponent/papercomponent";
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
      const { data: { message } } = await axios.get('/bikes')
      console.log(message)
      setHealthResponse(message[0]);
    }
    getHealthResponseFromDapr()
  }, [])

  return (
    <Fragment>
      <Appbar />
      <div className={classes.bikesRoot}>
        <Grid container>
          <PaperComponent />
        </Grid>
      </div>
    </Fragment>
  );
};
