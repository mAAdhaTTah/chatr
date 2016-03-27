import { AnonymousObservable, Observable } from 'rx';

export function create(messageCreator) {
    const observers = new Set();

    const stream = function stream(value) {
        observers.forEach(observer => observer.onNext(messageCreator(value)));
    };

    AnonymousObservable.call(stream, observer => {
        observers.add(observer);
        return () => observers.delete(observer);
    });
    Object.assign(stream, AnonymousObservable.prototype, Observable.prototype);

    return stream;
}
