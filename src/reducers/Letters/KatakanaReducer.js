export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_KATAKANA':
            return action.payload;
        default:
            return state;
    }
}