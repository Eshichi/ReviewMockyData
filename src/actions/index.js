import jsonPlaceHolder from '../apis/jsonPlaceHolder'




export const selectLetter = letter => {
    //return an action
    return {
        type: 'LETTER_SELECTED',
        payload: letter
    };
}


export const fetchKanji = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/5e8ee070300000810064be7f')
    dispatch({
        type: 'FETCH_KANJI' , payload: response
    })
}

export const fetchKatakana = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/5e85bc01300000ca1497b3bd');
    // api = services
    dispatch({
        type: 'FETCH_KATAKANA', payload: response
//type = constant
    })
}

export const fetchN5Verbs = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/5e85fdb2300000102397b73b');

    dispatch({
        type: 'FETCH_N5_VERBS' , payload: response
    })
}

export const fetchN5VerbsV2 = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/5e85fe03300000ca1497b741');

    dispatch({
        type: 'FETCH_N5_VERBS', payload: response
    })
}

export const fetchN5WordsLessonOne = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/5e7ba1c32d0000ed6211a325');
    dispatch({
        type: 'FETCH_LESSON_ONE', payload: response
    })
}


export const fetchN5WordsLessonTwo = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/5e80d4fa30000049006f95b9');
    dispatch({
        type: 'FETCH_LESSON_TWO', payload: response
    })
}

export const fetchN5WordsLessonThree = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/5e80d8473000002d006f95c1');
    dispatch({
        type: 'FETCH_LESSON_THREE', payload: response
    })
}

export const fetchN5WordsLessonFour = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/5e80e0c33000004a006f95d0');
    dispatch({
        type: 'FETCH_LESSON_FOUR', payload: response
    })
}
