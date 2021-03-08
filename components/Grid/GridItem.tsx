import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const styles: any = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  }
};

const useStyles = makeStyles(styles);

export default function GridItem(props): any {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}


// TODO: Convert this to typescript (Low priority)
GridItem.defaultProps = {
  className: ""
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number
};
