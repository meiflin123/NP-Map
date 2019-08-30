import miniBlogs from '../apis/miniBlog';
import { 
  SIGN_IN,
  SIGN_OUT, 
  FETCH_PARKS,
  PARK_SELECTED

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

export const createMiniBlog = (formValues, parkId) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  console.log('here', userId)
  const response = await miniBlogs.post('/miniBlogs', {...formValues, parkId: parkId, userId});
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
