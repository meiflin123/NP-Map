import { FETCH_PARKS, PARK_SELECTED } from '../actions/type';
import _ from 'lodash';

export const parkReducer = (state={}, action) => {
  switch (action.type) {
    case FETCH_PARKS:
      return {...state, ..._.mapKeys(action.payload, 'id') };

    default:
      return state;

  }
}

export const selectedParkReducer = (selectedPark= null, action) => {
  if(action.type === PARK_SELECTED) {
    return action.payload;
  }
  return selectedPark;
}