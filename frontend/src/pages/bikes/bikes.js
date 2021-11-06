import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import axiosInstance from "../../config/axiosInstance"
import { Fragment, useEffect, useState } from "react";
import { Appbar } from "../../components/appbar/appbar";
import { Footer } from "../../components/footer/footer";
import { PaperComponent } from "../../components/papercomponent/papercomponent";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  bikesRoot: {
    flexGrow: 1,
  },
  gridContainer: {
    justifyContent: "center",
    marginBottom: "6rem",
    minHeight: "100vh",
    width: "100%",
  },
  loadingGridContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  bikesErrorColor: {
    color: "#ff0000"
  },
  bikesErrorDiv: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center"
  }
}));

export const Bikes = () => {
  const classes = useStyles();
  const [bikeResponse, setBikeResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    async function getAllBikes() {
      try {
        const {
          data: { message },
        } = await axiosInstance.get("/bikes");
        setBikeResponse(message);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
    getAllBikes();
  }, []);

  if (isLoading)
    return (
      <Fragment>
        <Appbar position="static" backgroundColor="#000" />
        <div className={classes.bikesRoot}>
          <Grid container className={classes.loadingGridContainer}>
            <CircularProgress />
          </Grid>
        </div>
        <Footer />
      </Fragment>
    );
  return (
    <Fragment>
      <Appbar position="static" backgroundColor="#000" />
      <div className={classes.bikesRoot}>
        <Grid container spacing={1} className={classes.gridContainer}>
          {bikeResponse && bikeResponse.length > 0 ? ( 
            bikeResponse.map((bike) =>
              bike ? (
                <PaperComponent bike={bike} />
              ) : (
                "Unable to load inventory."
              )
            )
          ) : (
            <div className={classes.bikesErrorDiv}>
              <span className={classes.bikesErrorColor}>Unable to load inventory. An error has occurred, please try again.</span>
            </div>
          )}
        </Grid>
      </div>
      <Footer />
    </Fragment>
  );
};
