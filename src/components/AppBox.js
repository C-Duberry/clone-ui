import AppleStore from '../images/AppleStore.webp'
import GooglePlay from '../images/GooglePlay.webp'


/* This component is for the app store section of the page. 
AppInnerContainer1 is for Sainsbury's app store and the 
second is for Argos. Each containe an h3 for the heading and 
two images, which link to their respective app store.  */

function AppBox() {

return(
<div className="appContainer">
    <div className='appContainerHolder'>
        <div className='appInnerContainer1'>
            <h3 className="appName">Sainsbury's apps</h3>
            <img className="appleAppBadge" src={AppleStore} alt="Apple App Logo"></img>
            <img className="googleAppBadge" src={GooglePlay} alt="Google Play Logo"></img>
           </div>
        <div className='appInnerContainer2'>
             <h3 className="appName">Argos app</h3>
            <img className="appleAppBadge" src={AppleStore} alt="Apple App Logo"></img>
            <img className="googleAppBadge" src={GooglePlay} alt="Google Play Logo"></img>
            </div>
     </div> 
</div>
)
}

export default AppBox

