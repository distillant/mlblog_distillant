/* global fetch */

import {delay} from 'redux-saga'
import {all, call, put, take, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import {actionTypes, failure, loadDataSuccess, loadArticles} from './actions'

es6promise.polyfill()


function * loadArticlesSaga () {
    try {

       // const res = yeild db.child('articles').once('value')

        const res = yield fetch('https://mlblog-distillant.firebaseio.com/articles.json')
        const data = yield res.json()
        yield put(loadDataSuccess(data))
    } catch (err) {
        yield put(failure(err))
    }
}
/*
function * loadArticleSaga () {
  try {
    const res = yield fetch('http://localhost:3000/static/testData/article.json)
    const data = yield res.json()
    //yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}*/

function * rootSaga () {
  yield all([
     takeLatest(actionTypes.LOAD_ARTICLES, loadArticlesSaga)
  ])
}

export default rootSaga
