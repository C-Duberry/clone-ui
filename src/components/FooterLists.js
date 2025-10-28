
/*This component creates the large list of links in the footer.  */

function FooterList() {

  /*Four separate arrays are used as there are four separate lists. Each array contains a URL and
  the display text. Below each array, is a map the converts the array into a list of links. */
  
  const listOne = [
      ["https://help.sainsburys.co.uk/help", "Help Centre"],
      ["https://help.sainsburys.co.uk/help/contact-us?_ga=2.231984543.1865828722.1675867231-1222147648.1675702358", "Contact us"],
      ["https://stores.sainsburys.co.uk/?_ga=2.231984543.1865828722.1675867231-1222147648.1675702358", "Store locator"],
      [null,null, "Tell us what you think"],
      ["https://feedback.sainsburys.co.uk/survey/SV_0eXofGHBALFYUwC", "About Shopping in-store"],
      ["https://feedback.sainsburys.co.uk/survey/SV_0eXofGHBALFYUwC", "About shopping online"],
      ]
      
      const listOneCreate = listOne.map((item, index) => {
        return (
          <li key={index}>
            <a href={item[0]} target="_blank" rel="noreferrer">
              {item[1]}
              <h4 className="h4-list">{item[2]}</h4>
            </a>
          </li>
        );
      });
      
      const listTwo = [
          ["https://about.sainsburys.co.uk/?_ga=2.215198167.1381932302.1675869479-1222147648.1675702358", "About Sainsbury's"],
          ["https://www.about.sainsburys.co.uk/sustainability/better-for-everyone/community-and-partnerships?_ga=2.215198167.1381932302.1675869479-1222147648.1675702358", "Local Charity"],
          ["https://www.sainsburysgiftcard.co.uk/","Volunteer Shopping Card"],
          ["https://www.sainsburysbusinessdirect.co.uk/", "Business Gift Cards"],
          ["https://sainsburys.jobs/", "Jobs"],
          ["https://www.about.sainsburys.co.uk/sustainability/plan-for-better/our-stories/2017/standing-up-to-modern-slavery?_ga=2.178769636.1381932302.1675869479-1222147648.1675702358", "Modern Slavery Statement"],
          ]
          
          const listTwoCreate = listTwo.map((item, index) => {
            return (
              <li key={index}>
                <a href={item[0]} target="_blank" rel="noreferrer">
                  {item[1]}
                </a>
              </li>
            );
          });

      const listThree = [
          ["https://www.sainsburys.co.uk/webapp/wcs/stores/servlet/gb/groceries?storeId=10151&langId=44&krypto=gRhRqi8d8PtRYLnF1yLNBG%2BYRPmrOmB2zkbrweMQQ3zZp5sWxsyJNwimcsMXN9p%2FvYnXKGd0%2BCAUWbBhTjudRrIPYAFTd5Pm7f4PCcjSFwDzxPs3FTGjwyFsnfrjau5S&ddkey=https%3Agb%2Fgroceries", "Groceries"],
          ["https://tuclothing.sainsburys.co.uk/?_ga=2.206605907.1381932302.1675869479-1222147648.1675702358", "Tu"],
          ["https://www.sainsburysbank.co.uk/?cid=ref_all_091512","Bank"],
          ["https://www.argos.co.uk/?cmpid=SB-GM-12", "Argos"],
          ["https://www.habitat.co.uk/?utm_source=Sainsburys&utm_medium=referral&utm_campaign=banner&utm_campaign=Footer&_%24ja=tsid:77091%7Ccgn:Footer", "Habitat"],
          ["https://www.sainsburysenergy.com/#utm_source=sainsburys&utm_medium=website&utm_campaign=homepage_footer_link_shopwithus", "Energy"],
          ]
          
          const listThreeCreate = listThree.map((item, index) => {
            return (
              <li key={index}>
                <a href={item[0]} target="_blank" rel="noreferrer">
                  {item[1]}
                </a>
              </li>
            );
          });
      
          const listFour = [
              ["https://www.sainsburysenergy.com/#utm_source=sainsburys&utm_medium=website&utm_campaign=homepage_footer_link_getmore", "Energy"],
              ["https://www.sainsburys.co.uk/shop/gb/groceries/home", "Home ideas"],
              ["https://activekids.sainsburys.co.uk/?_ga=2.148392311.1381932302.1675869479-1222147648.1675702358","Active Kids"],
              ["https://www.sainsburys.co.uk/shop/gb/groceries/get-ideas/our-instore-services/our-instore-services", "In-store services"],
              ["https://www.sainsburyarchive.org.uk/", "The Sainsbury archive"],
              ["https://www.about.sainsburys.co.uk/brands-that-deliver/nectar?_ga=2.148392311.1381932302.1675869479-1222147648.1675702358", "Nectar"],
              ]
              
              const listFourCreate = listFour.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item[0]} target="_blank" rel="noreferrer">
                      {item[1]}
                    </a>
                  </li>
                );
              });

/*Return contains a h2 element for each list heading and their respective
Lists. This component is displayed within the Footer component.*/

  return (
    <div className="footerListContainer">
      <div className="list1">
        <h4 className="footerHeadings">Sainsbury's Help & FAQs</h4>
        <ul>{listOneCreate}</ul>
      </div>
      <div className="list2">
        <h4 className="footerHeadings">Company</h4>
        <ul>{listTwoCreate}</ul>
      </div>
      <div className="list3">
        <h4 className="footerHeadings">Shop with us</h4>
        <ul>{listThreeCreate}</ul>
      </div>
      <div className="list4">
        <h4 className="footerHeadings">Get more</h4>
        <ul>{listFourCreate}</ul>
      </div>
    </div>
  );
}

export default FooterList

