import nectarLogo from '../images/nectarLogo.webp'
import habitatLogo from '../images/habitatLogo.webp'
import sainsburysLogo from '../images/sainsburysLogo.webp'
import argosLogo from '../images/argosLogo.webp'
import tuLogo from '../images/tuLogo.webp'

/* Used to display the logos in the header. */

function HeaderLogos () {

  /*Array of logo images and the text, 
  which will be used as the alt/className */

const logos = [
  [sainsburysLogo, "sainsburys"],
  [argosLogo, "argos"],
  [tuLogo, "tu"],
  [habitatLogo, "habitat"],
  [nectarLogo, "nectar"],

]

/*Map method used to convert the array data into image elements for each
  image.  */

const displayLogos = logos.map((item, index) =>{
 return <img key={index} src={item[0]} alt={item[1]} className={item[1]}></img>
})

/*Return contains the logos. */
    return(
        <div className="headerLogos">
          {displayLogos}
        </div>
    )
}

export default HeaderLogos

