import React from 'react';
import { WAITING, CONNECTED, DISCONNECTED } from '../messages/connection';

const Header = React.createClass({
    displayName: 'Header',

    render: function render() {
        let display = '';

        const { status } = this.props;

        switch (status) {
            case CONNECTED:
                display = 'Connected';
                break;
            case DISCONNECTED:
                display = 'Disconnected';
                break;
            case WAITING:
            default:
                display = 'Waiting'
                break;
        }

        return (
            <header className="ctr-header-container">
                <h1 className="ctr-header-brand">Chatr</h1>
                <div className="ctr-header-status">{display}</div>
            </header>
        );
    }
});

export default Header;
