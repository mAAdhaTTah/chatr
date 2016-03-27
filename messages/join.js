export const JOIN_AS_USER = 'JOIN_AS_USER';

export function joinAsUser(username) {
  return {
    type: JOIN_AS_USER,
    payload: username
  }
}
