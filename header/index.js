import React from 'react';

const Header = React.createClass({
    displayName: 'Header',

    render: function render() {
        let display = '';

        return (
            <header className="ctr-header-container">
                <h1 className="ctr-header-brand">Chatr</h1>
                <div className="ctr-header-status">{display}</div>
            </header>
        );
    }
});

export default Header;
