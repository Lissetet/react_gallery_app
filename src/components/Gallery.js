import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Photo from './Photo';
import NotFound from './NotFound';

import apiKey from '../config';
const baseURL = `https://www.flickr.com/services/rest/?method=flickr.photos.`;
const urlParams = `&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1`;


const Gallery = ({topic, isIndex = false}) => {
  const params = useParams();
  const tag = params.tag || topic;
  const method = isIndex ? 'getRecent' : `search&tags=${tag}`;
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`${baseURL}${method}${urlParams}`)
      .then(res => setPhotos(res.data.photos.photo))
      .then(() => setLoading(false))
      .catch(err => console.log(err));
  }, [method]);

  return (
    <div className="photo-container">
      <h2><span>{tag || 'Recent'}</span> Photos</h2>
      <ul>
        { 
          loading ? <h3>Loading...</h3> :
          photos.length === 0 ? <NotFound /> :
          photos.map(photo => <Photo data={photo} key={photo.id}/>)
        }
      </ul>
    </div>
  );
}

export default Gallery;