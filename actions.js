export const actionTypes = {
  FAILURE: 'FAILURE',
  LOAD_ARTICLES:"LOAD_ARTICLES",
  LOGOUT:'LOGOUT',
  OPEN_ARTICLE: 'OPEN_ARTICLE',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  LOGIN: 'LOG_IN',
  UPDATE_ARTICLES: 'UPDATE_ARTICLES',
  ADD_COMMENT:'ADD_COMMENT',
  ADD_ARTICLE:'ADD_ARTICLES'
}
export function Login (user){
  return {
      type: actionTypes.LOGIN,
      user
  }
}

export function loadArticles (data) {
    return {
        type: actionTypes.LOAD_ARTICLES,
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
