import { format } from "date-fns";

const SET_SELECTED_DATE = "home/SET_SELECTED_DATE";

const setSelectedDate = (payload) => ({
  type: SET_SELECTED_DATE,
  payload: payload,
});

const initialState = {
  selectedDate: format(new Date(), "yyyy-MM-dd"),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };

    default:
      return state;
  }
}

export const setSelectedItemId = (chosenDate) => {
  return (dispatch) => {
    const formattedDate = format(chosenDate, "yyyy-MM-dd");
    dispatch(setSelectedDate(formattedDate));
  };
};
