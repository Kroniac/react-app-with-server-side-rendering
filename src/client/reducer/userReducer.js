import { FETCH_USERS } from '../actions/index';

export default (state = [], actions) => {
  switch (actions.type) {
    case FETCH_USERS:
      return actions.payload.data;
    default:
      return state;
  }
};
