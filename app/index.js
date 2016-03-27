import React from 'react';
import { prop } from 'ramda';
import { Observable } from 'rx';
import Header from '../header';
import Join from '../join';

const headerProps = prop('connection');

const App = React.createClass({
    displayName: 'App',

    statics: {
        stream: Observable.merge(Join.stream)
    },

    render: function() {
        return (
            <div className="ctr-container">
                <Header {...headerProps(this.props)} />
                <Join />
            </div>
        );
    }
});

export default App;
