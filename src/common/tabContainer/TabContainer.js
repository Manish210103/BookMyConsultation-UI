import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const TabContainer = function (props) {
  return (
    <Typography component="div" style={{ padding: 0, textAlign: "center" }}>
      {props.children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabContainer;
