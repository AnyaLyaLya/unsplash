import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import './galleryStrip.scss';
import { Photo } from '../../types/Photo';
import { Screen } from '../../types/Screen';
import { FC, useEffect, useState } from 'react';
import { Button, ButtonProps, ImageList, ImageListItem, ThemeProvider, styled } from '@mui/material';
import { button } from '../../themes/button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

interface Props {
  photos: Photo[];
}

export const GallaryStrip: FC<Props> = ({ photos }) => {
  const [spacing, setSpacing] = useState(1);
  const {
    columns,
    setSelectedPhoto,
    screen,
    favoritePhotos,
    setFavoritePhotos,
    user,
  } = useAppContext();

  const navigate = useNavigate();

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    navigate(`/${photo.id}`);
  };

  const handleAddToFavorites = (photo: Photo) => {
    let updatedFavorites: Photo[];
  
    if (!favoritePhotos.some(item => item.id === photo.id)) {
      updatedFavorites = favoritePhotos.filter(item => item.id !== photo.id);
      updatedFavorites.push(photo);
    } else {
      updatedFavorites = favoritePhotos.filter(item => item.id !== photo.id);
    }
    setFavoritePhotos(updatedFavorites);
  };

  const FavoutiteButton = styled(Button)<ButtonProps>(({ theme }) => ({
    minWidth: '64px',
    '@media (max-width: 600px)': { 
      minWidth: '24px',
    },
    ':hover': {
      backgroundColor: '#d0d0d037'
    }
  }));
  
  useEffect(() => {
    const updateSpacing = () => {
      if (screen === Screen.DESKTOP && columns === 3) {
        setSpacing(24);
      } else if (screen === Screen.DESKTOP) {
        setSpacing(12);
      } else if (screen === Screen.TABLET) {
        setSpacing(6);
      } else {
        setSpacing(1);
      }
    };

    updateSpacing();
  }, [screen, columns]);

  return (
    <div className={`gallery-strip`}>
      <ImageList variant="masonry" cols={columns} gap={spacing} id='masonry'>
        {photos.map(photo => (
          <ImageListItem key={photo.id} className="gallery-strip__photo">
            <button
              type="button"
              onClick={() => handlePhotoClick(photo)}
              className='gallery-strip__button'
            >
              
              <img
                className="gallery-strip__img"
                src={`${photo.urls.small.split('?')[0]}?w=356&fit=crop&auto=format`}
                srcSet={`${photo.urls.small.split('?')[0]}?w=356&fit=crop&auto=format&dpr=2 2x`}
                alt={photo.alt_description}
                title={photo.alt_description}
                loading='lazy'
              />
            </button>
            
            {user && (
              <ThemeProvider theme={button}>
                <FavoutiteButton 
                  className={`${favoritePhotos.includes(photo) ? 'active' : ''}`} 
                  id='gallery-strip__favorite-button'
                  variant="outlined" 
                  onClick={() => handleAddToFavorites(photo)}
                  size='small'
                >
                  {favoritePhotos.includes(photo) ? (
                    <RemoveOutlinedIcon />
                  ) : (
                    <AddOutlinedIcon />
                  )}
                </FavoutiteButton>
              </ThemeProvider>
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
