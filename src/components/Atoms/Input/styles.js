import { makeStyles } from "@material-ui/core";

export default makeStyles(Theme => ({
  default: {
    color: Theme.palette.text.white,
    fontSize: "20px",
    fontWeight: "bold",
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
    width: "100%",

    "&:focus": {
      borderColor: Theme.palette.primary.main
    }
  }
}));