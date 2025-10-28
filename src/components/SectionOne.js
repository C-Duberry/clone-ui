
import smallImage1 from '../images/smallImage1.webp'
import smallImage2 from '../images/smallImage2.webp'
import smallImage3 from '../images/smallImage3.webp'
import smallImage4 from '../images/smallImage4.webp'
import SmallContainers from './SmallContainers'

/*This function is used to display the first section on the main page,
which is a h2 title and 4 small cards. */

function SectionOne () {

/*Array contains the image for the card, a title and some text. */    

const dataBoxes = [

    [smallImage1, "We’ve got even more £1 saver slots","*Applies to 4hr flexible saver slots only" ],
    [smallImage2, "Sainsbury's delivery pass" , "Pay no delivery charges 7 days a week. T&Cs apply*"],
    [smallImage3, "Click & collect 1 hour slots" , "No min spend on any C&C order. View T&Cs"],
    [smallImage4, "Sainsbury's Chop Chop app" , "Groceries delivered in 60 minutes" ]
    ]
    
    
  /*Used to map over the dataBoxes array to create a card, using the component SmallContainers, which
  contains the Bootstrap card component. */  

    const smallCards = dataBoxes.map(item=> {
    return <SmallContainers key={item[0]} image={item[0]} heading={item[1]} text={item[2]} />
    });

    /*The return includes the heading for the section and the small cards display. */

   return(
    <div>
        <div className="sectionHeading">
        <h2>Ways to shop with us at Sainsbury's</h2>
        </div>
        <div className="imageRow1">
        {smallCards}
        </div>
    </div>
   )

}

export default SectionOne

