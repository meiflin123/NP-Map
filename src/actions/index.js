import miniBlogs from '../apis/miniBlog';
import { SIGN_IN, SIGN_OUT, FETCH_PARKS } from './type.js'

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

export const createMiniBlog = formValues => async (dispatch) => {
  // eslint-disable-next-line
  const response = await miniBlogs.post('/miniBlogs', formValues);
};

export const fetchParks = () => async (dispatch) => {
  const response = await miniBlogs.get('/parks')
  dispatch({ type: FETCH_PARKS, payload: response.data })
  console.log(response.data) // array of objects with id and name property

}
