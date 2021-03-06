import { makeStyles } from "@material-ui/core";

export default makeStyles(Theme => ({
  default: {
    color: Theme.palette.text.white,
    backgroundColor: "transparent",
    outline: "none",
    border: "none",
    
    "&:focus": {
      borderColor: Theme.palette.primary.main
    }
  }
}));
