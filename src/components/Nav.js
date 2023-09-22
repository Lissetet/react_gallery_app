import { NavLink } from "react-router-dom";

const topics = ['cats', 'dogs', 'computers'];

const Nav = () => {
  return (
    <nav class="main-nav">
      <ul>
        { topics.map(topic => <li><NavLink to={`/${topic}`}>{topic}</NavLink></li>) }
      </ul>
    </nav>
  );
}

export default Nav;