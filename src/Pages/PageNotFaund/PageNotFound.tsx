import { Link } from 'react-router-dom';
import { SearchInput } from '../../components/SearchInput';
import './PageNotFaund.scss';

export const PageNotFound = () => (
  <div className='containerPNF'>
    <div className='pageNotFound'>
      <h1 className='pageNotFound__title'> 404 </h1>
      <p className='pageNotFound__subtitle'>Oops! Page not found!</p>
      <SearchInput />
      <Link to='/' className='pageNotFound__link'>
        Back to home
      </Link>
    </div>
  </div>
);