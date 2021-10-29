import "./Card.css";
// Compositon in React , content projection in angular
// Wrapper card class for base components
// how to build them thru the props.children
function Card(props) {
  // console.log(props.children, props.className);
  const classes = "card-body " + props?.className; // Card className="blah" becomes card blah
  return <div className={classes}>{props.children}</div>;
}

export default Card;
