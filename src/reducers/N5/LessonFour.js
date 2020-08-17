export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LESSON_FOUR':
            return action.payload;
        default:
            return state;
    }
}