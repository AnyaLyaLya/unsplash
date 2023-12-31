import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../../img/logo.svg';
import { SearchInput } from '../SearchInput';
import { useAppContext } from '../../contexts/AppContext';
import { Avatar } from '@mui/material';
import { SiUnsplash } from 'react-icons/si';

export const Header = () => {
  const { user } = useAppContext();

  return (
    <div className='container'>
      <header className="header">
        <div className='header__box'>
          <Link to='/' className='header__logo'>
            <SiUnsplash size={36}/>
          </Link>

          <SearchInput />
        </div>

        {user ? (
          <Link to={`/user`} className='header__link'>
            <Avatar >{user.name.slice(0,2)}</Avatar>
          </Link>
          
          ) : (
          <Link to='/auth' className='header__link'>
            Log In
          </Link> 
          )
        }
        
        
      </header>
    </div> 
  );
};