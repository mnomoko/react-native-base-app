import {
  UPDATE_LOADING_VIEW, UPDATE_CONTACT_MODAL_STATUS
} from "./action-type";

export const setLoader = isLoading => async dispatch => {
  dispatch({ type: UPDATE_LOADING_VIEW, payload: isLoading });
};

export const setModalStatus = status => async dispatch => {
  dispatch({ type: UPDATE_CONTACT_MODAL_STATUS, payload: status });
};
