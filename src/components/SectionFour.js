import largeImage5 from '../images/largeImage5.webp'
import largeImage6 from '../images/largeImage6.webp'
import LargeContainers from './largeContainers';

    
    
/*Used to map over the dataBoxes array to create a card, using the component LargeContainers, which
contains the Bootstrap card component. */  

function  SectionFour() {

  /*Array contains the image for the card, a title, description, a link and the link text. */    

  const dataBoxes = [
    [
      largeImage5,
      "Sainsbury's Bank Loans",
      "Find out how likely you are to be accepted without affecting your credit score. From 4.8% APR representative for Nectar members when you borrow £7,500 - £15,000 for 1-5 years. T&Cs apply. Credit subject to status",
      "https://www.sainsburysbank.co.uk/travel-money?cid=ref_trm_acq_220101&qc_campaign=ref_trm_acq_2201&qc_paid=paid&qc_medium=onlinepopup",
      "Find out more",
    ],
    [
      largeImage6,
      "New Winter styles",
      "Get the whole family ready for whatever the new season has in store with our new styles",
      "https://tuclothing.sainsburys.co.uk/c/new-in/new-in?text=new+in&_ga=2.245148229.1946924171.1675855578-1222147648.1675702358",
      "Shop Tu new in",
    ],
  ];
  
  /*Used to map over the dataBoxes array to create a card, using the component LargeContainers, which
  contains the Bootstrap card component. */  

  const largeCards = dataBoxes.map(item=>{
      return <LargeContainers key={item[0]} image={item[0]} heading={item[1]} text={item[2]} link={item[3]} linkText={item[4]}/> 
  });

    /*The return includes the heading for the section and the large cards display. */


  return (
    <div>
        <div className="sectionHeading">
        <h2>More from our brands</h2>
        </div>
        <div className="imageRow4">
        {largeCards}
        </div>
    </div>
  );
}

export default SectionFour;




