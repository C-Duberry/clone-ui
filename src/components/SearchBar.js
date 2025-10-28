import React from 'react'


/*Component for the search/select box in the header.*/
const SearchBar = () => {

/*An element containing the SVG search icon used instead of the “search” text on the button
next to the input box. */

const searchIcon = (
    <svg
    aria-hidden="true"
    className="searchIcon"
    viewBox="0 0 24 24"
    width= "17px"
    height="17px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.692 15.333a5.641 5.641 0 1 0 0-11.282 5.641 5.641 0 0 0 0 11.282zm6.117-.975 5.89 5.891a1.026 1.026 0 0 1-1.45 1.45l-5.89-5.89a7.692 7.692 0 1 1 1.45-1.45z"
      fill="currentColor"
    />
  </svg>
)

  return (

      /*A react element that returns the select list, input box and button in the header.  For the button text, there is “search” and the search icon – 
text will change depending on the width of the screen.*/

    <div className="searchBar">
      <form className="searchForm">
        <div className="selectBox">
          <select className="category" placeholder='entr'>
            <option value="0">Groceries</option>
            <option value="1">Tu</option>
            <option value="2">Argos</option>
            <option value="2">Habitat</option>
            <option value="2">Recipes</option>
          </select>
        </div>
        <div className="searchBox">
          <input
            type="text"
            className="searchInput"
            placeholder="Search for products"
          ></input>
        </div>
        <button>
        {searchIcon}
          <span className="full">Search</span>
        </button>
      </form>
    </div>
  );

  
}

export default SearchBar

