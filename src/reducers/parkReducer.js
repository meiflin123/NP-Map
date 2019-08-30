import { FETCH_PARKS } from '../actions/type';
import _ from 'lodash';

export default (state={}, action) => {
  switch (action.type) {
    case FETCH_PARKS:
      return {...state, ..._.mapKeys(action.payload, 'id') };

    default:
      return state;

  }
  console.log('parkreducer', state)
}