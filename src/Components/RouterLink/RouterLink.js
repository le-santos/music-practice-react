import { Link } from "react-router-dom";

const RouterLink = (props) => {
  return <Link to={props.to}>{props.children}</Link>;
};

export default RouterLink;
