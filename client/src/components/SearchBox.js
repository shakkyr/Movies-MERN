import React from 'react';

const SearchBox = ({search , setSearch}) => {
  return (
      <div className='col col-sm-4'>
           <input className='form-control' value={search} onChange={(e)=>setSearch(e.target.value)}  placeholder="Search a Movie">

           </input>
      </div>
      
      ) 
};

export default SearchBox;
