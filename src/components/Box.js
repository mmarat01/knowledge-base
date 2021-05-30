import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  boxStyles: {
    // colors
    backgroundColor: props => props.bg,
    color: props => props.tc, // stands for text color
    // margins
    marginTop: props => props.mt || props.my,
    marginBottom: props => props.mb || props.my,
    marginLeft: props => props.ml || props.mx,
    marginRight: props => props.mr || props.mx,
    // paddings
    paddingTop: props => props.pt || props.py,
    paddingBottom: props => props.pb || props.py,
    paddingLeft: props => props.pl || props.px,
    paddingRight: props => props.pr || props.px,
    // alignment
    textAlign: props => props.align,
  },
});

const Box = ({ children, ...props }) => {
  const s = useStyles(props);
  return <div className={s.boxStyles}>{children}</div>;
};

export default Box;
