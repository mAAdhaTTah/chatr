import React from 'react';

const App = React.createClass({
    displayName: 'App',

    propTypes: {
        headline: React.PropTypes.string
    },

    render: function() {
        return (
            <h1>{this.props.headline}</h1>
        );
    }
});

export default App;
