import React from 'react';
import Card from 'react-bootstrap/Card';

/*This function component is used to present the large 
image cards. It uses a React Bootstrap component and receives props 
from the SectionTwo and SectionFour components, which is where the cards
are created and returned. 

The cards consist of an image, title, text and link.*/

function LargeContainers (props) {

    return(
 <React.Fragment>      
 <div className='largeImageBox'>
<Card className="largeCard">
<Card.Img className="cardImageLarge" variant="top" src={props.image}/>
<Card.Body className='cardLargeBody'>
  <Card.Title className='cardTitleLarge'><h3>{props.heading}</h3></Card.Title>
  <Card.Text className='cardTextLarge'>{props.text}</Card.Text>
  <Card.Text className='linkLarge'><a href={props.link} target="blank">{props.linkText}</a>  </Card.Text>
</Card.Body>
</Card>
</div>
</React.Fragment> 

    )

}

export default LargeContainers

