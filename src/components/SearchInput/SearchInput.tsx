import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from '../../themes/searchInput';
import { useAppContext } from '../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';

export const SearchInput = () => {
  const { searchQuery, setSearchQuery, setPage } = useAppContext();
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setSearchQuery(searchValue);
    navigate(`/`);
    setSearchValue('');
    setPage(1);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          value={searchValue}
          onChange={handleInputChange}
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </form>
  )
}
