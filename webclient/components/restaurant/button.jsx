import React from 'react'
import ReactDOM from 'react-dom';
import {Card, Grid, Icon,Button, Image} from 'semantic-ui-react'
class ButtonComponent extends React.Component{
  constructor() {
      super();
  }
  render(){
    return(
      <div>
        <Button fluid color='orange' floated='right' className='buttonStyle'>
            save
            <Icon name='right heart'/>
        </Button>
      </div>
    )
  }
}
module.exports=ButtonComponent;
