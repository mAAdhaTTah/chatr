import { CONNECTION_STATUS } from '../messages/connection';
import { JOIN_AS_USER } from '../messages/join';
import { REFRESH_STATE } from '../messages/refresh';

export default function reducer(state, { type, payload }) {
    switch (type) {
        case JOIN_AS_USER:
            state.username = payload;
            break;
        case CONNECTION_STATUS:
            state.connection = Object.assign({}, state.connection, payload);
            break;
        case REFRESH_STATE:
            state = Object.assign({}, payload);
            break;
        case 'msg':
            state.msg = payload;
            break;
    }

    return state;
}
