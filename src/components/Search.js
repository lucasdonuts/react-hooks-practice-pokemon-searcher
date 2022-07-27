import React from "react";

function Search({ setSearchQuery }) {

  const handleChange = (e) => {
    setSearchQuery( () => e.target.value )
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={ handleChange } />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
