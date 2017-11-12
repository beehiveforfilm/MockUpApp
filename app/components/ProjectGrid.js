var React = require('react');
var PropTypes = require('prop-types');

class ProjectGrid extends React.Component {
    componentWillMount () {
        var currentProjects = [{'name' : 'Sainma'},{'name' :  'cinema'},{'name':'film'}];
        this.setState({
            currentProjects : currentProjects
        });
    }

    render() {
        return (
            <div className='.project-list-container'>
            <ul className='project-list'>
                {
                    this.state.currentProjects.map(project => {
                        return (
                            <li  className='project-list-item' key={project.name}> {project.name}</li>
                        );
                    })
                }
            </ul>
            </div>
        );
    }
}

ProjectGrid.propTypes = {
    // currentProjects : PropTypes.array.isRequired,
}
module.exports = ProjectGrid;