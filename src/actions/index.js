import miniBlogs from '../apis/miniBlog';
import history from '../history';
import { 
  SIGN_IN,
  SIGN_OUT, 
  FETCH_PARKS,
  PARK_SELECTED,
  FETCH_MINIBLOGS,
  FETCH_MINIBLOG,
  CREATE_MINIBLOG,
  EDIT_MINIBLOG,
  DELETE_MINIBLOG

} from './type.js'

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = userId => {
  return {
    type: SIGN_OUT,
  };
};

export const fetchParks = () => async (dispatch) => {
  const response = await miniBlogs.get('/parks')
  dispatch({ type: FETCH_PARKS, payload: response.data })
  console.log(response.data) // array of objects with id and name property
}

export const selectPark = (parkId) => {
  return {
    type: PARK_SELECTED,
    payload: parkId
  }
}

export const createMiniBlog = (formValues, parkId) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  console.log('here', userId)
  const response = await miniBlogs.post('/miniBlogs', {...formValues, parkId, userId});
  //dispatch({ type: CREATE_MINIBLOG, payload: response.data });
  history.push('/mini_blog')
};

export const fetchMiniBlogs = () => async dispatch => {
  const response = await miniBlogs.get('/miniBlogs')
  console.log('fetch miniblogs', response);
  dispatch({ type: FETCH_MINIBLOGS, payload: response.data })
};

export const fetchMiniBlog = id => async dispatch => {
  const response = await miniBlogs.get(`/miniBlog/${id}`)
  dispatch({ type: FETCH_MINIBLOG, payload: response.data })
};

export const editMiniBlog = (id, formValues) => async dispatch => {
  const response = await miniBlogs.patch(`/miniBlog/${id}`, formValues);
  dispatch({ type: EDIT_MINIBLOG, payload: response.data })
 
};

export const deleteMiniBlog = id => async dispatch => {
  // eslint-disable-next-line
  const response = await miniBlogs.delete(`/miniBlog/${id}`);
  dispatch({ type: DELETE_MINIBLOG, payload: id })
};
