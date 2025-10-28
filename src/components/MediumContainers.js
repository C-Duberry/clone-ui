import React from 'react';
import Card from 'react-bootstrap/Card';

/*This function component is used to present the medium
image cards. It uses a React Bootstrap component and receives props 
from SectionThree, which is where the cards
are created and returned. 

The cards consist of an image, title, text and link.*/


function MediumContainers (props) {

    return(
 <React.Fragment>      
 <div className='mediumImageBox'>
<Card className="mediumCard">
<Card.Img className="cardImageMedium" variant="top" src={props.image}/>
<Card.Body className='cardMediumBody'>
  <Card.Title className='cardTitleMedium'><h3>{props.heading}</h3></Card.Title>
  <Card.Text className='cardTextMedium'>{props.text}</Card.Text>
  <Card.Text className='linkMedium'><a href={props.link} target="blank">{props.linkText}</a>  </Card.Text>
</Card.Body>
</Card>
</div>
</React.Fragment> 

    )

}

export default MediumContainers

