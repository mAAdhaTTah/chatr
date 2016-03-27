import React from 'react';
import ReactDOM from 'react-dom';
import { Observable, Observer } from 'rx';
import { prop } from 'ramda';
import App from './app';
import { refreshState } from './messages/refresh';
import { isRefreshState, notRefreshState } from './filters/refresh';
import { isJoinAsUser } from './filters/join';
import { create as stateStream } from './streams/state';
import { create as socketStream } from './streams/socket';
import reducer from './reducer';

const INITIAL = window.__INITIAL_STATE__ || {};

document.addEventListener('DOMContentLoaded', () => {
    const state = stateStream(reducer);
    const socket = socketStream();
    const DOM = Observer.create(props => ReactDOM.render(
        <App {...props}/>,
        document.getElementById('app')
    ));

    state
        .filter(isRefreshState)
        .map(prop('payload'))
        .subscribe(DOM);

    const joinAsUserDisposer =
        state
            .filter(isJoinAsUser)
            .subscribe(socket);

    Observable.merge(
        App.stream,
        socket
    ).subscribe(state);

    // TODO: don't love this kickoff
    state.onNext(refreshState(INITIAL));
});
