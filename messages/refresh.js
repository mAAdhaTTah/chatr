export const REFRESH_STATE = 'REFRESH_STATE';

export function refreshState(state) {
  return {
    type: REFRESH_STATE,
    payload: state
  }
}
