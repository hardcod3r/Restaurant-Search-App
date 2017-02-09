import React from 'react'
import {Card, Grid, Icon,Button, Image} from 'semantic-ui-react'
import ButtonComponent from './button.jsx'

// var imgStyle = {
//   height : '500px'
// }

class Cards extends React.Component {
    constructor() {
        super();
    }
    render()
    {
        return (

            <div className='cardStyle'>
                <div className='ui center aligned grid'>
                    <Card>

                        <Image className='imgStyle' src={this.props.image}/>

                        <Card.Content>
                            <Card.Header className='headStyle'>{this.props.name}</Card.Header>
                            <Card.Meta className='metaStyle'>{this.props.cuisines}</Card.Meta>
                            <Card.Description className='descriptionStyle'>{this.props.location}</Card.Description>
                        </Card.Content>
                        <Card.Content extra className='extraStyle'>
                            <a><Icon name='star' color='orange'  /> {this.props.ratings}
                            </a>
                        </Card.Content>
                        {/* <Card.Content extra className='buttonStyle'> */}

                            <ButtonComponent/>

                        {/* </Card.Content> */}
                    </Card>
                </div>
            </div>

        )
    }
}
module.exports = Cards;
