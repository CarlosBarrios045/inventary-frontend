import palette from "./palette";

export default {
  MuiButton: {
    root: {
      borderRadius: 8,

      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    /* contained: {
      boxShadow: 'none',

      '&:hover': {
        boxShadow: 'none'
      },
      '&:active': {
        boxShadow: 'none '
      }
    }, */
    label: {
      textTransform: "initial",
    },
  },
  MuiTab: {
    root: {
      minWidth: "max-content !important",
    },
  },
  MuiDialog: {
    paperWidthXs: {
      maxWidth: 350,
    },
  },
  MuiDialogActions: {
    root: {
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  MuiInputBase: {
    input: {
      // color: palette.text.dark
    },
  },
  MuiInput: {
    underline: {
      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `1px solid ${palette.primary.light}`,
      },
    },
  },
};
