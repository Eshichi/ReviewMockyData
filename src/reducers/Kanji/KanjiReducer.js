export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_KANJI":
            return action.payload;
        default:
            return state;

    }
}