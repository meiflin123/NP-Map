import {
  FETCH_MINIBLOGS,
  FETCH_MINIBLOG,
  CREATE_MINIBLOG,
  EDIT_MINIBLOG,
  DELETE_MINIBLOG

} from '../actions/type';

import _ from 'lodash';



export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MINIBLOGS: 
      return { ...state, ..._.mapKeys(action.payload, 'id') };

    case FETCH_MINIBLOG:
      return { ...state, [action.payload.id]: action.payload };
    
    case CREATE_MINIBLOG:
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_MINIBLOG:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_MINIBLOG:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};