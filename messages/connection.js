export const CONNECTION_STATUS = 'CONNECTION_STATUS';
export const WAITING = 'WAITING';
export const CONNECTED = 'CONNECTED';
export const DISCONNECTED = 'DISCONNECTED';

export function connectionStatus(status) {
    return {
        type: CONNECTION_STATUS,
        payload: { status }
    };
}
