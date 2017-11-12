var React = require('react');
// require('../styles/header.css');

class Header extends React.Component {
    render() {
        return (
            <div className='main-header'>
                    <ul className='header-list'>
                        <li>
                            Stack Icon
                        </li>
                    </ul>
                
                    <ul className='header-list'>
                        <li>
                            Settings
                        </li>
                        <li>
                            SeachBar
                        </li>
                        <li>
                            User Img
                        </li>
                    </ul>
            </div>
        );
    }
}

module.exports = Header;