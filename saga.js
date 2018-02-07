/* global fetch */

import {delay} from 'redux-saga'
import {all, call, put, take, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import {actionTypes, failure, loadDataSuccess, loadArticles} from './actions'

import firebase from 'firebase'
import 'isomorphic-unfetch'
import CONFIG from './credentials/clientSide'

es6promise.polyfill()


function * connectToFirebase () {
    try {
        // const res = yeild db.child('articles').once('value')
         yield firebase.initializeApp(CONFIG.firebaseConfig)


        //const res = yield fetch('https://mlblog-distillant.firebaseio.com/articles.json')
        //const data = yield res.json()
        //yield put(loadDataSuccess(data))
    } catch (err) {
        yield put(failure(err))
    }
}

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

function * loginSaga () {
    try {
        const res = yield firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        yield put(loggedIn(res))
    } catch (err) {
        yield put(failure(err))
    }
}

function * logOutSaga () {
    try {
        const res = yield firebase.auth().signOut()
        yield put(loggedIn(res))
    } catch (err) {
        yield put(failure(err))
    }
}




function * rootSaga () {
  yield all([
      takeLatest(actionTypes.LOGIN, loginSaga),
      takeLatest(actionTypes.LOGOUT, logOutSaga),
      takeLatest(actionTypes.LOAD_ARTICLES, loadArticlesSaga)
  ])
}

export default rootSaga
