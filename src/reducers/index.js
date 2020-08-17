import { combineReducers } from 'redux'

import KatakanaReducer from './Letters/KatakanaReducer'

import Kanji from './Kanji/KanjiReducer'

import N5Verbs from './N5/VerbsReducer'
import N5VerbsV2 from './N5/VerbsReducerV2'

import N5LessonOne from './N5/LessonOne'
import N5LessonTwo from './N5/LessonTwo'
import N5LessonThree from './N5/LessonThree'
import N5LessonFour from './N5/LessonFour'
const lettersReducer = () => {
    return [
        {
            letterEng: 'A', letterJap: 'あ' 
        },
        {
            letterEng: 'I', letterJap: 'い'
        },
        {
            letterEng: 'U', letterJap: 'う'
        },
        {
            letterEng: 'E', letterJap: 'え'
        },
        {
            letterEng: 'O', letterJap: 'お'
        },

        {
            letterEng: 'KA', letterJap: 'か'
        },
        {
            letterEng: 'KI', letterJap: 'き'
        },
        {
            letterEng: 'KU', letterJap: 'く'
        },
        {
            letterEng: 'KE', letterJap: 'け'
        },
        {
            letterEng: 'KO', letterJap: 'こ'
        },

        {
            letterEng: 'SA', letterJap: 'さ'
        },
        {
            letterEng: 'SHI', letterJap: 'し'
        },
        {
            letterEng: 'SU', letterJap: 'す'
        },
        {
            letterEng: 'SE', letterJap: 'せ'
        },
        {
            letterEng: 'SO', letterJap: 'そ'
        },

        {
            letterEng: 'TA', letterJap: 'た'
        },
        {
            letterEng: 'CHI', letterJap: 'ち'
        },
        {
            letterEng: 'TSU', letterJap: 'つ'
        },
        {
            letterEng: 'TE', letterJap: 'て'
        },
        {
            letterEng: 'TO', letterJap: 'と'
        },

        {
            letterEng: 'NA', letterJap: 'な'
        },
        {
            letterEng: 'NI', letterJap: 'に'
        },
        {
            letterEng: 'NU', letterJap: 'ぬ'
        },
        {
            letterEng: 'NE', letterJap: 'ね'
        },
        {
            letterEng: 'NO', letterJap: 'の'
        }
    ];
}

const selectedLetterReducer = (selectedLetter = null, action) => {
    
    if (action.type === "LETTER_SELECTED") {
        return action.payload;
    }

    return selectedLetter;
}

export default combineReducers({
    katakanaReducer: KatakanaReducer,
    kanjiReducer: Kanji,
    N5Verbs: N5Verbs,
    N5VerbsV2: N5VerbsV2,

    letters: lettersReducer,
    selectedLetter: selectedLetterReducer,

    lessonOneN5: N5LessonOne,
    lessonTwoN5: N5LessonTwo,
    lessonThreeN5: N5LessonThree,
    lessonFourN5: N5LessonFour,

});