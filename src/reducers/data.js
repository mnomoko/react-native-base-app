import {
  UPDATE_LOADING_VIEW, UPDATE_CONTACT_MODAL_STATUS
} from "../actions/action-type";

const initialState = {
  isLoading: true,
  isContactModalOpen: false
};

export default function(state = initialState, action) {
  if(action.type === UPDATE_LOADING_VIEW) {
    return {
      ...state,
      isLoading: action.payload
    }
  }
  if(action.type === UPDATE_CONTACT_MODAL_STATUS) {
    return {
      ...state,
      isContactModalOpen: action.payload
    }
  }

  return state;
}
