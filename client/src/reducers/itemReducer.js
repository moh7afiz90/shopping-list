import uuid from 'uuid'
import {GET_ITEMS, ADD_ITEMS, DELETE_ITEMS} from '../actions/types'

const initialState = {
  item: [
    { id: uuid(), name: 'Eggs'},
    { id: uuid(), name: 'Milk'},
    { id: uuid(), name: 'Steak'},
    { id: uuid(), name: 'Candy'}
  ]
}

export default function(state = initialState, action) {
  switch(action.type){
    case GET_ITEMS: 
      return {
        ...state
      };
      case ADD_ITEMS: 
        return {
          ...state
        };
      case DELETE_ITEMS:
        return {
          ...state
        }
      default: 
        return state;
  }
}