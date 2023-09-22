import { Route, Routes, Navigate } from "react-router-dom";

import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import PageNotFound from "./components/PageNotFound";
import topics from "./data/topics";

function App() {
  const getRoute = topic => 
    <Route key={topic} path={`/${topic}`} element={<Gallery topic={topic} />} />;

  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <Routes>
        <Route index element={<Gallery isIndex={true} />} />
        { topics.map(getRoute) }
        <Route path="search/:tag" element={<Gallery />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;