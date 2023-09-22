import { Route, Routes, Navigate } from "react-router-dom";

import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";

const apiKey = process.env.REACT_APP_FLICKR_API_KEY;

function App() {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <Routes>
        <Route index element={<Navigate replace to="dogs" />} />
        <Route path="/:topic" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;