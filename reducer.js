import {actionTypes} from './actions'

export const initialState={
  settings:{},
  page:{
    title:"Home",
    url: "/"
  },
  articleId:null,
  user:null,
  articles:[],
  article:{},
  comments:{},
    error:false
};



function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{error: action.error}
      }
      case actionTypes.LOAD_ARTICLES:
          return {
            ...state

        }
      case actionTypes.LOAD_DATA_SUCCESS:
          return {
              ...state,
              ...{articles: action.data}
          }
      case actionTypes.ADD_ARTICLE:
      return {
        ...state,
        ...{articles: action.data}
      }

    case actionTypes.LOGOUT:
      return {
        ...state,
        ...{user: null}
      }

    case actionTypes.LOGIN:
      return {
        ...state,
        ...{user: action.data}
      }

    default:
      return state
  }
}

export default reducer
