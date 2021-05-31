import React from "react";
import { createUseStyles } from "react-jss";

/**********/
/* STYLES */
/**********/
const useBoxStyles = createUseStyles({
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

const useParagraphStyles = createUseStyles({
  paragraphStyles: {},
});

const useListStyles = createUseStyles({
  listStyles: {},
});

/***********/
/* EXPORTS */
/***********/
export const Box = ({ children, ...props }) => {
  const s = useBoxStyles(props);
  return <div className={s.boxStyles}>{children}</div>;
};

export const Link = ({ children, url, ...props }) => {
  return (
    <a href={url} target='_blank' rel='noreferrer'>
      {children}
    </a>
  );
};

export const Paragraph = ({ children, ...props }) => {
  const s = useParagraphStyles(props);
  return <p className={s.paragraphStyles}>{children}</p>;
};

export const List = ({ children, num, ...props }) => {
  const s = useListStyles(props);
  return num ? (
    <ol className={s.listStyles}>{children}</ol>
  ) : (
    <ul className={s.listStyles}>{children}</ul>
  );
};
