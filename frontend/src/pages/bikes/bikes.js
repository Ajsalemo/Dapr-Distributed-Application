import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Appbar } from "../../components/appbar/appbar";
import { Footer } from "../../components/footer/footer";
import { PaperComponent } from "../../components/papercomponent/papercomponent";

const useStyles = makeStyles(() => ({
  bikesRoot: {
    flexGrow: 1,
  },
  gridContainer: {
    justifyContent: "center",
    marginBottom: "6rem",
    minHeight: "100vh"
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

  return (
    <Fragment>
      <Appbar position="static" backgroundColor="#000" />
      <div className={classes.bikesRoot}>
        <Grid
          container
          spacing={1}
          className={classes.gridContainer}
        >
          {bikeResponse &&
            bikeResponse.map(
              (bike) =>
                bike ? <PaperComponent bike={bike} /> : "Unable to load inventory."
            )}
        </Grid>
      </div>
      <Footer />
    </Fragment>
  );
};
