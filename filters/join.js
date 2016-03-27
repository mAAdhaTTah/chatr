import { JOIN_AS_USER } from '../messages/join';
import { equals, not, compose, prop } from 'ramda';

export const isJoinAsUser = compose(equals(JOIN_AS_USER), prop('type'));
export const notJoinAsUser = compose(not, isJoinAsUser);
