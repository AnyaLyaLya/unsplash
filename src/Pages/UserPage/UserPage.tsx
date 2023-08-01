import { Link } from "react-router-dom";
import { GallaryStrip } from "../../components/GalleryStrip";
import { SearchInput } from "../../components/SearchInput";
import { useAppContext } from "../../contexts/AppContext";
import './UserPage.scss';
import SignInSide from "../../components/SignInSide/SignInSide";

export const UserPage = () => {
  const { user, favoritePhotos } = useAppContext();
  return (
    user ? (
      favoritePhotos.length > 0 ? (
        <>
          <h1 className="user-page__title">Welcome, {user?.name}</h1>

          <GallaryStrip photos={favoritePhotos} />
        </> 
      ) : (
        <div className='containerUP'>
          <div className='user-page'>
            <h1 className="user-page__title">Welcome, {user?.name}</h1>
            <h3 className="user-page__subtitle">You can add your favorite photos here</h3>
            <SearchInput />
            <Link to='/' className='user-page__link'>
              Back to home
            </Link>
          </div>
        </div>
      )) : (
        <SignInSide />
      )
    
  );
};