import React from 'react';
import Card from 'react-bootstrap/Card';

/*This function component is used to present the small
image cards. It uses a React Bootstrap component and receives props 
from SectionOne, which is where the cards
are created and returned. 

The cards consist of an image, title, text and link. The cards are 
given a width and height of 100%*/

function SmallContainers (props) {

const width = {width: "100%" }
const height = {height: "100%"}

    return(
 <React.Fragment>      
 <div className='smallImageBox'>
<Card  style={{...width, ...height}}>
<Card.Img variant="top" src={props.image}/>
<Card.Body>
  <Card.Title>{props.heading}</Card.Title>
  <Card.Text>{props.text}</Card.Text>
</Card.Body>
</Card>
</div>
</React.Fragment> 

    )

}

export default SmallContainers

