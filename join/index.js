import React from 'react';
import { partial } from 'ramda';
import { create as createStream } from '../streams/callback';
import { joinAsUser } from '../messages/join';

const Join = React.createClass({
    displayName: 'Join',

    statics: {
        stream: createStream(joinAsUser)
    },

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
                    <button onClick={partial(Join.stream, [value])}>Join</button>
                </div>
            </div>
        )
    }
});

export default Join;
