import React from 'react';
import { Observable } from 'rx';
import Header from '../header';
import Join from '../join';

const App = React.createClass({
    displayName: 'App',

    statics: {
        stream: Observable.merge(Join.stream)
    },

    render: function() {
        return (
            <div className="ctr-container">
                <Header />
                <Join />
            </div>
        );
    }
});

export default App;
