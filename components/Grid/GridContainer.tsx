import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};

const useStyles = makeStyles(styles);

export default class GridContainer extends React.Component<any> {
  render() {
    const classes = useStyles();
    const { children, className, ...rest } = this.props;
    return (
      <Grid container {...rest} className={classes.grid + " " + className}>
        {children}
      </Grid>
    );
  }
}

// TODO: Convert this to typescript (Low priority)
// GridContainer.defaultProps = {
//   className: ""
// };

// GridContainer.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string
// };
