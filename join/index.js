import React from 'react';
import { partial } from 'ramda';

const Join = React.createClass({
    displayName: 'Join',

    getInitialState: function() {
        return {
            value: ''
        }
    },

    updateValue: function(e) {
        this.setState({value: e.target.value})
    },

    render: function() {
        const { value } = this.state;

        return (
            <div className="ctr-join-container">
                <div className="ctr-join-form">
                    <h3>Join the Chat</h3>
                    <label className="ctr-join-label">What's Your Username?</label>
                    <input
                        type="text"
                        value={value}
                        onChange={this.updateValue} />
                    <button>Join</button>
                </div>
            </div>
        )
    }
});

export default Join;
