import HeaderLogos from "./HeaderLogos"
import SvgTopMenu from "./SvgTopMenu"
import MenuNavigation from "./MenuNavigation"
import SearchBar from "./SearchBar";

/*The header component is used to display the header on the site. The elements within the header have been imported.*/

function Header () {

  /*The return contains all of the items in the header, including the 
top menu, the SVG logos, the search element and the 
navigation menu.  */

  return (
    <div>
      <div className="header">
        <div className="headerContainer">
          <div className="topMenu">
            <SvgTopMenu />
          </div>
          <div className="headerContainerInner">
            <div className="logoHeader">
              <HeaderLogos />
            </div>
           <SearchBar />
            <MenuNavigation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header

