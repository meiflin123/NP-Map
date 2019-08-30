import miniBlogs from '../apis/miniBlog';
import { SIGN_IN, SIGN_OUT } from './type.js'

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

