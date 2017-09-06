export default function userReducer(state = {}, action) {
    switch (action.type) {
        case 'CREATE_USER':
            return Object.assign({}, action.user);
        default:
            return state;
    }
}