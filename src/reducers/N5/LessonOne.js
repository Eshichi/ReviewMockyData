export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LESSON_ONE':
            return action.payload;
        default:
            return state;
    }
}