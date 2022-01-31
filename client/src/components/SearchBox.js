import React from 'react';

const SearchBox = ({search , setSearch}) => {
     const handleChange = (e) => {
          e.preventDefault();
          setSearch(e.target.value)
     }
  return (
      <div className='col col-sm-4'>
           <input className='form-control' value={search} onChange={handleChange}  placeholder="Search a Movie">

           </input>
      </div>
      
      ) 
};

export default SearchBox;
