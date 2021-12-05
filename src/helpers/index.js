import ru from "date-fns/locale/ru";
import { format, parseISO } from "date-fns";
import { EVENT_MODE, EVENT_TYPES, ADDITIONAL_INPUTS } from "./../constants";

export const formatDate = (date) => {
  return format(parseISO(date), "d MMMM yyyy", { locale: ru });
};

export const getInitialState = (state) => {
  return state && state.mode === EVENT_MODE.EDIT
    ? {
        ...state.item,
        type: EVENT_TYPES.find((e) => e.key === state.item.type),
      }
    : {
        eventName: "",
        type: EVENT_TYPES[0],
        additionalFields: ADDITIONAL_INPUTS[EVENT_TYPES[0].key],
      };
};
