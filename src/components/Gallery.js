import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Photo from './Photo';
import NotFound from './NotFound';
import { useEffect } from 'react';

const apiKey = process.env.REACT_APP_FLICKR_API_KEY;
const baseURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}`;
const urlParams = `&per_page=24&format=json&nojsoncallback=1`;

const Gallery = () => {
  const { topic } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}&tags=${topic}${urlParams}`)
      .then(res => setPhotos(res.data.photos.photo))
      .catch(err => console.log(err));
  }, [topic]);

  return (
    <div class="photo-container">
      <h2>Results</h2>
      <ul>
        { 
          photos.length === 0 ? <NotFound /> :
          photos.map(photo => <Photo data={photo} key={photo.id}/>)
        }
      </ul>
    </div>
  );
}

export default Gallery;