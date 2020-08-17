export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_N5_VERBS_V2':
            return action.payload;
        default:
            return state;
    }
}