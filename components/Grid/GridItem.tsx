import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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

export default class GridItem extends React.Component<any> {
  render() {
    const classes = useStyles();
    const { children, className, ...rest } = this.props;
    return (
      <Grid item {...rest} className={classes.grid + " " + className}>
        {children}
      </Grid>
    );
  }
}

// TODO: Convert this to typescript (Low priority)
// GridItem.defaultProps = {
//   className: ""
// };

// GridItem.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string
// };
