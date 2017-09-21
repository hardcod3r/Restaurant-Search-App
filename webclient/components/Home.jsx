var React = require('react');
var Home = React.createClass({

render:function()
{
  return(
    <div className="container-fluid">
    	<div className="row">
    		<div className="col-md-12">
    			<div className="jumbotron">
    				<h2>
    					Home
    				</h2>
    				<p>
    					Welcome to our app
    				</p>
    				<p>
    					<a className="btn btn-primary btn-large" href="./clientapp.jsx">Learn more</a>
    				</p>
    			</div>
    		</div>
    	</div>
    </div>
  );
}
});

module.exports=Home;
