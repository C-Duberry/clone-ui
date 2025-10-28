
import largeImage1 from "../images/largeImage1.webp";
import largeImage2 from "../images/largeImage2.webp";
import largeImage3 from "../images/largeImage3.webp";
import largeImage4 from "../images/largeImage4.webp";
import LargeContainers from "./largeContainers";

    
    
  /*Used to map over the dataBoxes array to create a card, using the component LargeContainers, which
  contains the Bootstrap card component. */  

function SectionTwo() {

 /*Array contains the image for the card, a title, description, a link and the link text. */    

  const dataBoxes = [
    [
      largeImage1,
      "Top deals for your weekly shop",
      "Great offers for your weekly shop, when it matters most",
      "https://www.sainsburys.co.uk/gol-ui/offers?shoppingAreaId=Offers",
      "Shop Now",
    ],
    [
      largeImage2,
      "Frozen offers",
      "Great savings on freezer favourites",
      "https://www.sainsburys.co.uk/gol-ui/offers/frozen",
      "Shop Now",
    ],
    [
      largeImage3,
      "Pet food offers",
      "Keep your best pals well fed",
      "https://www.sainsburys.co.uk/gol-ui/offers/pet",
      "Shop Now",
    ],
    [
      largeImage4,
      "Great offers on 100s of toys for half-term fun",
      "Selected lines",
      "https://www.argos.co.uk/browse/toys/c:30299/?clickOrigin=header:search:menu:toys",
      "Shop Argos",
    ],
  ];
      
  /*Used to map over the dataBoxes array to create a card, using the component LargeContainers, which
  contains the Bootstrap card component. */  

  const largeCards = dataBoxes.map((item) => {
    return (
      <LargeContainers
        key={item[0]}
        image={item[0]}
        heading={item[1]}
        text={item[2]}
        link={item[3]}
        linkText={item[4]}
      />
    );
  });
  

    /*The return includes the heading for the section and the large cards display. */

  return (
    <div>
        <div className="sectionHeading">
        <h2>Great offers</h2>
        </div>
        <div className="imageRow2">
        {largeCards}
        </div>
    </div>
  );
}

export default SectionTwo;


