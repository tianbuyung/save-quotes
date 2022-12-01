import React from 'react';

import classes from './HighlightedQuote.module.css';

function HighlightedQuote(props) {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
}

export default HighlightedQuote;