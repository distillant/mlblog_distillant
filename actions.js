export const actionTypes = {
    FAILURE: 'FAILURE',
    LOAD_ARTICLES:"LOAD_ARTICLES",
    LOAD_ARTICLE: 'OPEN_ARTICLE',
    LOAD_ARTICLE_SUCCESS:'LOAD_ARTICLE_SUCCESS',
    LOAD_DATA: 'LOAD_DATA',
    LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
    LOGIN: 'LOG_IN',
    LOGOUT:'LOGOUT',
    LOGGED_IN: 'LOGGED_IN',
    LOGGED_OUT:'LOGGED_OUT',
    UPDATE_ARTICLES: 'UPDATE_ARTICLES',
    ADD_COMMENT:'ADD_COMMENT',
    ADD_ARTICLE:'ADD_ARTICLES',
    CONNECT_TO_FIREBASE:"CONNECT_TO_FIREBASE"
}
export function login (user){
  return {
      type: actionTypes.LOGIN,
      user
  }
}

export function loadArticleSuccess (data) {
    return {
        type: actionTypes.LOAD_ARTICLE_SUCCESS,
        data
    }
}
export function connectToFirebase (){
    return {
        type: actionTypes.CONNECT_TO_FIREBASE,

    }
}

export function logout (user){
    return {
        type: actionTypes.LOGOUT,
        user
    }
}

export function loggedIn (user){
    return {
        type: actionTypes.LOGGED_IN,
        user
    }
}
export function loadArticles (data) {
    return {
        type: actionTypes.LOAD_ARTICLES,
        data
    }
}
export function loadArticle (data) {
    return {
        type: actionTypes.LOAD_ARTICLE,
        data
    }
}


export function failure (error) {
   console.log("ERROR:",error)
    return {
    type: actionTypes.FAILURE,
    error
  }
}


export function loadData () {
  return {type: actionTypes.LOAD_DATA}
}

export function loadDataSuccess (data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data
  }
}
