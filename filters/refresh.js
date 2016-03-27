import { REFRESH_STATE } from '../messages/refresh';
import { equals, not, compose, prop } from 'ramda';

export const isRefreshState = compose(equals(REFRESH_STATE), prop('type'));
export const notRefreshState = compose(not, isRefreshState);
