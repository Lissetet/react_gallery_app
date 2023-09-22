import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = ({photos, loading}) => {
  return (
    <ul>
      { 
        loading ? <h3>Loading...</h3> :
        photos.length === 0 ? <NotFound /> :
        photos.map(photo => <Photo data={photo} key={photo.id}/>)
      }
    </ul>
  );
}

export default PhotoList;