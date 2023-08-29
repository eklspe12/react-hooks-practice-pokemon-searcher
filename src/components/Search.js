import React from "react";

function Search({pokeSearch, onSearchChange}) {
  function handleChange (e) {
    onSearchChange(e.target.value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={pokeSearch} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
