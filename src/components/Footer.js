import FooterList from "./FooterLists";
import FooterSvgContainer from "./svgSocialFooter";

/*The footer component is for the footer section of the page. The list section and social icons
in the footer are imported from another component and added in the return. 
Within this component, the list for the legal links are made. */

function Footer() {

/* Array containing name and links. */

  const legal = [
    ["Privacy Hub", "shorturl.at/BIY38"],
    ["Privacy Policy", "https://privacy-hub.sainsburys.co.uk/privacy-policy/"],
    [
      "Cookie Policy",
      "https://privacy-hub.sainsburys.co.uk/cookie-policy/?_ga=2.84611034.2121740961.1676626870-1222147648.1675702358",
    ],
    [
      "Cookie Settings",
      "https://www.about.sainsburys.co.uk/brands-that-deliver/nectar?_ga=2.84611034.2121740961.1676626870-1222147648.1675702358",
    ],
    ["Accessibility", "shorturl.at/hKPW8"],
    [
      "Terms & Conditions",
      "https://help.sainsburys.co.uk/help/terms-and-conditions/terms-conditions?_ga=2.237766212.550368665.1676630127-1222147648.1675702358",
    ],
  ];

  /*Map method that turns the array into a list of links. */

  const legalList = legal.map((item, index) => {
    return (
      <li key={index}>
        <a href={item[1]} target="_blank" rel="noreferrer">
          {item[0]}
        </a>
      </li>
    );
  });

  
/*Return contains the large footer list component, the social svg component, 
the list created above and a slogan/copyright statement. */
  
  return (
    <div className="footerContainer">
      <FooterList />
      <div className="listSocial">
        <FooterSvgContainer />
      </div>
      <div className="legalList">
        <ul className="legal-ul">{legalList}</ul>
      </div>
      <div className="copyright">
        <p>Sainsbury’s, Helping everyone eat better</p>
        <p>© J Sainsbury plc 2023</p>
        <br></br>
        <h5 className="website"> Website Chosen </h5>
        <a
          className="website"
          href="https://www.sainsburys.co.uk/"
          target="blank"
          rel="noreferrer"
        >
          www.sainsburys.co.uk
        </a>
      </div>
    </div>
  );
}

export default Footer;


