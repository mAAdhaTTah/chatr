import io from 'socket.io-client';
import { Observable, Observer, Subject } from 'rx'
import { compose, curry } from 'ramda';
import { connectionStatus, WAITING, CONNECTED, DISCONNECTED } from '../messages/connection';

export const create = compose(clientStream, io);

function clientStream(socket) {
    const outgoing = Observer.create(
        function onNext(msg) {
            socket.emit('toserver', msg);
        }
    );

    const incoming = Observable.create(observer => {
        observer.onNext(connectionStatus(WAITING));

        socket.on('connect', function onConnect() {
            observer.onNext(connectionStatus(CONNECTED));
        });

        socket.on('fromserver', function onOpen(msg) {
            observer.onNext(msg);
        });

        socket.on('disconnect', function onDisconnect() {
            observer.onNext(connectionStatus(DISCONNECTED));
        });
   });

   return Subject.create(outgoing, incoming);
}
