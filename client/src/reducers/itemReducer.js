import uuid from "uuid";

import {ADD_ITEM, DELETE_ITEM, GET_ITEMS} from "../actions/types";

const initialState = {

    items: [      {
      id: uuid(),
      name: 'Milk'
    },
      {
        id: uuid(),
        name: 'Eggs'
      },
      {
        id: uuid(),
        name: 'Steak'
      },
      {
        id: uuid(),
        name: 'Water'
      }]

};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      console.log("getItems");
      return {...state};

    case DELETE_ITEM:
      console.log("deleteItems");
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case ADD_ITEM:
      console.log("addItem");
      return {...state,
      items: [action.payload, ...state.items]};

    default:
      return state;
  }
}