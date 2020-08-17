export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LESSON_TWO':
            return action.payload;
        default:
            return state;
    }
}