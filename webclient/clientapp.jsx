import React from 'react';
import ReactDOM from 'react-dom';
var ParentComponent = require('./components/sample/index.jsx');
class MainComponent extends React.Component {
	constructor(props) {
			super(props);

			this.state = {
			name: 'soundar'
	 }

}
change()
{
	var s = this.refs.name.value;
	this.setState({

		name: s});
}
    render () {
        return (
            <div>
                <h1>Hello From React by {this.state.name}</h1>
								  <input type="text" ref="name"/>
								<button onClick = {this.change.bind(this)}>parent click</button>





                <ParentComponent.Component1.Component1 name={this.state.name} />
								<ParentComponent.Component2.Component2  />
								 <ParentComponent.Component1.grandchild.grandchild/>

            </div>
        );
    }
}
ReactDOM.render(
    <MainComponent/>,document.getElementById('mountapp')
);
