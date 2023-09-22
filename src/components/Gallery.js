import Photo from './Photo';
import NotFound from './NotFound';

const urls = [
  'https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg',
  'https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg',
  'https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg',
]

const Gallery = () => {
  return (
    <div class="photo-container">
      <h2>Results</h2>
      <ul>
        {
          urls.map(url => <Photo url={url} />)
        }
        <NotFound />
      </ul>
    </div>
  );
}

export default Gallery;