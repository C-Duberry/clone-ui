import mediumImage1 from '../images/mediumImage1.webp'
import mediumImage2 from '../images/mediumImage2.webp'
import mediumImage3 from '../images/mediumImage3.webp'
import MediumContainers from './MediumContainers'

/*This function is used to display the third section on the main page,
which is a h2 title and 3 medium card components. */

function SectionThree() {

/*Array contains the image for the card, a title and some text. */     

  const dataBoxes = [
    [mediumImage1, "Mother's Day", "Show mum you care with a special gift", "https://www.argos.co.uk/events/mothers-day-gifts" ,"Shop Now"],
    [mediumImage2, "Mother's Day gifting ideas", "Make her feel fabulous with gifting from Tu", "https://tuclothing.sainsburys.co.uk/", "Shop Tu"],
    [mediumImage3, "Gifts for every budget", "Explore 100s of options","https://www.argos.co.uk" ,"Shop Argos" ]
  ];
  

  /*Used to map over the dataBoxes array to create a card, using the component MediumContainers, which
  contains the Bootstrap card component. */  

const mediumCards = dataBoxes.map(item=>{
    return <MediumContainers key={item[0]} image={item[0]} heading={item[1]} text={item[2]} link={item[3]} linkText={item[4]}/> 
});

/*The return includes the heading for the section and the medium cards display. */


    return (
      <div>
          <div className="sectionHeading">
          <h2>Make her feel special</h2>
          </div>
          <div className="imageRow3">
          {mediumCards}
          </div>
      </div>
    );
  }
  
  export default SectionThree;
  

