export const GET_STORE_ITEMS = 'GET_STORE_ITEMS';
export const GET_STORE_ITEMS_SUCCESS = 'GET_STORE_ITEMS_SUCCESS';
export const GET_STORE_ITEMS_ERROR = 'GET_STORE_ITEMS_ERROR';

export function getStoreItems() {
  return {
    type: GET_STORE_ITEMS,
  };
}

const initialState = {
  data: [],
  pending: false,
  error: null,
};

export function storeReducer(state = initialState, {type, payload}) {
  switch (type) {
    case GET_STORE_ITEMS:
      return {...state, pending: true, error: null};
    case GET_STORE_ITEMS_SUCCESS:
      return {...state, data: payload, pending: false};
    case GET_STORE_ITEMS_ERROR:
      return {...state, pending: false, error: 'Error'};
    default:
      return state;
  }
}
