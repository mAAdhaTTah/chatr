import { ReplaySubject } from 'rx';
import { refreshState } from '../messages/refresh';
import { notRefreshState } from '../filters/refresh';

export function create(reducer) {
    const stream = new ReplaySubject();

    stream
        // Remove the messages we're about to create
        .filter(notRefreshState)
        .scan(reducer, {})
        .map(refreshState)
        .subscribe(stream);

    return stream;
}
