export const GET_STORE_ITEMS = 'GET_STORE_ITEMS';
export const GET_STORE_ITEMS_SUCCESS = 'GET_STORE_ITEMS_SUCCESS';
export const GET_STORE_ITEMS_ERROR = 'GET_STORE_ITEMS_ERROR';

export function getStoreItems() {
  return {
    type: GET_STORE_ITEMS
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
      console.log('get store items');
      return Object.assign({}, state, {pending: true, error: null});
    case GET_STORE_ITEMS_SUCCESS:
      console.log('get store items success');
      return Object.assign({}, state, {data: payload, pending: false});
    case GET_STORE_ITEMS_ERROR:
      console.log('get store items error');
      return Object.assign({}, state, {pending: false, error: 'Error'});
    default:
      return state;
  }
}
