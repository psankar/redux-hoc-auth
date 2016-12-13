export const CHANGE_AUTH = 'CHANGE_AUTH';

export function ChangeAuth(changeTo) {
    return {
        type: CHANGE_AUTH,
        payload: changeTo
    };
}