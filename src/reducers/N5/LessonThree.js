export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LESSON_THREE':
            return action.payload;
        default:
            return state;
    }
}