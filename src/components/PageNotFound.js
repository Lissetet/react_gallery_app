import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container-not-found">
      <h1>Page Not Found</h1>
      <img src={`${process.env.PUBLIC_URL}/404.jpg`} alt="404"/>
      <div>
        <button onClick={()=>navigate(-1)}>Go Back</button>
        <button onClick={()=>navigate('/')}>Go Home</button>
      </div>
      <Pagination />
    </div>
  );
}

export default NotFound;