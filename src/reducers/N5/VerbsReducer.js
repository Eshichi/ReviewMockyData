export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_N5_VERBS':
            return action.payload;
        default:
            return state;
    }
}