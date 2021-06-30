import { Link } from "react-router-dom";

import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link
        to={`/quotes/${props.id}`}
        className="btn"
        key={props.id}
        id={props.id}
        author={props.author}
        text={props.text}
      >
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
