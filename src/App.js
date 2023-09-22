import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";

const apiKey = process.env.REACT_APP_FLICKR_API_KEY;

function App() {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <Gallery />
    </div>
  );
}

export default App;
