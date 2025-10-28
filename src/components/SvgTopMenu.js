/*This function is used to display the SVG logos in the top menu. Each logo is in 
its own separate element, which is displayed in the return.  
The SVG's are taken from Sainsbury's website and converted so they can be used
in React by https://react-svgr.com/playground/ */

const SvgTopMenu = () => {
  const help = (
    <svg
      data-child="true"
      aria-hidden="true"
      className="information-icon"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 18h3v-7H8a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v9l-1-1h4c1.333 0 1.333 2 0 2H8a1 1 0 0 1 0-2zm4-11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        fill="currentColor"
      />
    </svg>
  );

  const location = (
    <svg
      data-child="true"
      aria-hidden="true"
      className="location-icon"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.354 21.48a2.014 2.014 0 0 1-2.846-.138C6.186 16.58 4 12.847 4 10c0-4.513 3.536-8 8-8s8 3.487 8 8c0 2.847-2.186 6.58-6.508 11.342-.044.049-.09.095-.138.138zM18 10c0-3.402-2.634-6-6-6s-6 2.598-6 6c0 2.2 1.98 5.58 5.99 9.998C16.02 15.58 18 12.2 18 10zm-6 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        fill="currentColor"
      />
    </svg>
  );

  const account = (
    <svg
      data-child="true"
      aria-hidden="true"
      className="account-icon"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 15c-3.632 0-7 1.894-7 4h14c0-2.106-3.368-4-7-4zm0-2c3.755 0 9 2.01 9 6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2c0-3.99 5.245-6 9-6zm0-4a1.999 1.999 0 1 0 0-4 1.999 1.999 0 1 0 0 4zm0 2c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
        fill="currentColor"
      />
    </svg>
  );

/*Array to store the URLs for the SVG and the actual SVG. */

  const topMenu= [
   [help, "Help centre" , "https://help.sainsburys.co.uk/help?_ga=2.72168723.1456782393.1676633560-1222147648.1675702358"],
   [location, "Store locator", "https://stores.sainsburys.co.uk/?_ga=2.72168723.1456782393.1676633560-1222147648.1675702358"],
   [account, "Log in", "/"]
  ]

/*Map method to return the SVG logos within an anchor tag.  */

  const displayTopMenu = topMenu.map((item,index)=>{
  return  <div  key={index}><a href={item[2]} target="_blank" rel="noreferrer">{item[0]}{item[1]}</a></div>
  })

 /*The map is returned */ 

  return (
    <div className="topSvg">
        {displayTopMenu}
    </div>
  );
};

export default SvgTopMenu;


