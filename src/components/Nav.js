import { NavLink } from "react-router-dom";

const topics = ['cats', 'dogs', 'computers'];

const Nav = () => {
  const link = topic => <li key={topic}><NavLink to={`/${topic}`}>{topic}</NavLink></li>;
  return (
    <nav class="main-nav">
      <ul>
        { 
          topics.map(link) 
        }
      </ul>
    </nav>
  );
}

export default Nav;