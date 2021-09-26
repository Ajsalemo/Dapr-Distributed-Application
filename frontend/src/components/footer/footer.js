import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import axios from "axios";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  footerRoot: {
    flexGrow: 1,
  },
  footerButton: {
    color: "#fff",
    border: "none",
    backgroundColor: "transparent",
  },
  footerMain: {
    backgroundColor: "#000",
    top: "auto",
    bottom: 0,
    position: "fixed",
    [theme.breakpoints.up("sm")]: {
      position: "static",
    },
  },
  footerTypography: {
    width: "100%",
    textAlign: "center",
  },
  footerArrowUpIcon: {
    color: "#fff",
  },
}));

export const Footer = () => {
  const classes = useStyles();
  const [buildResponse, setBuildResponse] = useState(null);
 
  const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    async function getSecret() {
      const {
        data: { build },
      } = await axios.get("/secret");
      setBuildResponse(build);
    }
    getSecret();
  }, []);

  return (
    <div className={classes.footerRoot}>
      <AppBar className={classes.footerMain}>
        <Toolbar>
          <Typography variant="h6" className={classes.footerTypography}>
            <button
              onClick={() => smoothScrollToTop()}
              className={classes.footerButton}
            >
              <KeyboardArrowUpIcon className={classes.footerArrowUpIcon} />
            </button>
          </Typography>
          <Typography variant="caption" className={classes.footerArrowUpIcon}>
            {buildResponse ?? "v1.0 | Local"}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
