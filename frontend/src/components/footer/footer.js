import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles((theme) => ({
  footerRoot: {
    flexGrow: 1,
  },
  footerButton: {
    color: "#fff",
    border: "none",
    backgroundColor: "transparent"
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
      color: "#fff"
  }
}));

export const Footer = () => {
  const classes = useStyles();

  const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
        </Toolbar>
      </AppBar>
    </div>
  );
};
