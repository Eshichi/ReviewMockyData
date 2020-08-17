import React from 'react';
import { Route ,Switch} from 'react-router';
import Layout from './components/Layout';
import Home from './components/Landing';

import Hiragana from './components/Hiragana';
import HiraganaLanding from './components/Hiragana/Section/Landing/HiraganaLanding'
import HiraganaReview from './components/Hiragana/Section/Review/HiraganaReview'
import HiraganaStudy from './components/Hiragana/Section/Study/HiraganaStudy'

import Katakana from './components/Katakana';
import KatakanaLanding from './components/Katakana/Section/Landing/KatakanaLanding'
import KatakanaReview from './components/Katakana/Section/Review/KatakanaReview'
import KatakanaStudy from './components/Katakana/Section/Study/KatakanaStudy'

import Kanji from './components/Kanji';
import KanjiLanding from './components/Kanji/Section/Landing/KanjiLanding';
import KanjiReview from './components/Kanji/Section/Review/KanjiReview';
import KanjiStudy from './components/Kanji/Section/Study/KanjiStudy';




import Phrases from './components/Phrases';

import WordsLanding from './components/Words/WordsLanding'
import Words from './components/Words/N5/WordList/WordList';
import N5LessonList from './components/Words/N5/WordList/LessonList'

import N5VerbsStudy from './components/Words/N5/WordList/Study/Verbs'
import N5VerbsStudyV2 from './components/Words/N5/WordList/Study/VerbsV2'
import N5VerbsReview from './components/Words/N5/WordList/Review/Verbs'
import N5VerbsReviewV2 from './components/Words/N5/WordList/Review/VerbsV2'

import LessonOneReview from './components/Words/N5/WordList/Review/LessonOne';
import LessonTwoReview from './components/Words/N5/WordList/Review/LessonTwo';
import LessonThreeReview from './components/Words/N5/WordList/Review/LessonThree';
import LessonFourReview from './components/Words/N5/WordList/Review/LessonFour';

import LessonOneStudy from './components/Words/N5/WordList/Study/LessonOne';
import LessonTwoStudy from './components/Words/N5/WordList/Study/LessonTwo';
import LessonThreeStudy from './components/Words/N5/WordList/Study/LessonThree';
import LessonFourStudy from './components/Words/N5/WordList/Study/LessonFour';

export default () => (
    <Switch>

        <Layout>

            <Route exact path='/' component={Home} />
            <Route exact path='/Hiragana' component={HiraganaLanding} />
            <Route exact path='/Hiragana/Review' component={HiraganaReview} />
            <Route exact path='/Hiragana/Study' component={HiraganaStudy} />

            <Route exact path='/Katakana' component={KatakanaLanding} />
            <Route exact path='/Katakana/Study' component={KatakanaStudy} />
            <Route exact path='/Katakana/Review' component={KatakanaReview} />



            <Route exact path='/Kanji' component={KanjiLanding} />
            <Route exact path='/Kanji/Review' component={KanjiReview} />
            <Route exact path='/Kanji/Study' component={KanjiStudy} />

            <Route exact path='/Words' component={WordsLanding} />
            <Route exact path='/Words/N5' component={N5LessonList} />


            <Route exact path='/Words/N5/Verbs' component={N5VerbsStudy} />
            <Route exact path='/Words/N5/VerbsV2' component={N5VerbsStudyV2} />
            <Route exact path='/Words/N5/Verbs/Review' component={N5VerbsReview} />
            <Route exact path='/Words/N5/Verbs/ReviewV2' component={N5VerbsReviewV2} />



            <Route exact path='/Words/N5/LessonOne/N5Review' component={LessonOneReview} />
            <Route exact path='/Words/N5/LessonTwo/N5Review' component={LessonTwoReview} />
            <Route exact path='/Words/N5/LessonThree/N5Review' component={LessonThreeReview} />
            <Route exact path='/Words/N5/LessonFour/N5Review' component={LessonFourReview} />

            <Route exact path='/Words/N5/LessonOne/N5Study' component={LessonOneStudy} />
            <Route exact path='/Words/N5/LessonTwo/N5Study' component={LessonTwoStudy} />
            <Route exact path='/Words/N5/LessonThree/N5Study' component={LessonThreeStudy} />
            <Route exact path='/Words/N5/LessonFour/N5Study' component={LessonFourStudy} />

            <Route path='/Phrases' component={Phrases} />
            
        </Layout>
    </Switch>
);
