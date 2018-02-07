/* global fetch */

import {delay} from 'redux-saga'
import {all, call, put, take, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import {actionTypes, failure, loadDataSuccess, loadArticleSuccess, loadArticles} from './actions'

import firebase from 'firebase'
import 'isomorphic-unfetch'
import CONFIG from './credentials/clientSide'

import ReduxSagaFirebase from 'redux-saga-firebase';
es6promise.polyfill()
var reduxSagaFirebase
var authProvider

function * connectToFirebase () {
   try {
       reduxSagaFirebase= new ReduxSagaFirebase(CONFIG.firebaseConfig);
        authProvider = new firebase.auth.GoogleAuthProvider();

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

function * loadArticleSaga () {
  try {
    const res = yield fetch('https://mlblog-distillant.firebaseio.com/articles/'+1+".json")
    const data = yield res.json()
    yield put(loadArticleSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* loginSaga() {
    try {
        connectToFirebase()
        const data = yield call(reduxSagaFirebase.auth.signInWithPopup, authProvider);
        yield put(loggedIn(data));
    }
    catch(error) {
        yield put(failure(error));
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
     // call(connectToFirebase),
      takeLatest(actionTypes.LOAD_ARTICLE,loadArticleSaga),
      takeLatest(actionTypes.LOGIN, loginSaga),
      takeLatest(actionTypes.LOGOUT, logOutSaga),
      takeLatest(actionTypes.LOAD_ARTICLES, loadArticlesSaga)
  ])
}

export default rootSaga
