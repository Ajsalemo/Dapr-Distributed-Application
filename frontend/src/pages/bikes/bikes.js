import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Appbar } from "../../components/appbar/appbar";
import { PaperComponent } from "../../components/papercomponent/papercomponent";

const useStyles = makeStyles((theme) => ({
  bikesRoot: {
    flexGrow: 1,
  },
}));

export const Bikes = () => {
  const classes = useStyles();
  const [bikeResponse, setBikeResponse] = useState(null);
  useEffect(() => {
    async function getHealthResponseFromDapr() {
      const {
        data: { message },
      } = await axios.get("/v1/api/bikes/all");
      setBikeResponse(message);
    }
    getHealthResponseFromDapr();
  }, []);
  console.log(bikeResponse);
  return (
    <Fragment>
      <Appbar position="static" backgroundColor="#000" />
      <div className={classes.bikesRoot}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {bikeResponse &&
            bikeResponse.map(
              (bike) =>
                <PaperComponent bike={bike} /> ??
                "Unable to load inventory."
            )}
        </Grid>
      </div>
    </Fragment>
  );
};
