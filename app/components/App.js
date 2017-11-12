var React = require('react');

var Header = require('./Header');
var ProjectGrid = require('./ProjectGrid');

class App extends React.Component {
    
    render () {
        return (
            <div className='container'>
                <Header />
                <ProjectGrid />
                First Render
            </div>
        );
    }
}

module.exports = App;

