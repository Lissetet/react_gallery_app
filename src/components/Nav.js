import { NavLink } from "react-router-dom";
import topics from "../data/topics";

const Nav = () => {
  const link = topic => <li key={topic}><NavLink to={`/${topic}`}>{topic}</NavLink></li>;
  return (
    <nav className="main-nav">
      <ul>
        { topics.map(link) }
      </ul>
    </nav>
  );
}

export default Nav;