const todaysEvents = [
  {
    id: 0,
    date: "2021-12-17",
    eventName: "Dog's birthday",
    type: "holidays",
    additionalFields: [{ name: "budget", value: "300" }],
  },
  {
    id: 1,
    date: "2021-12-17",
    eventName: "Drinking vodka with neighbor",
    type: "activities",
    additionalFields: [
      { name: "address", value: "in Tomsk city" },
      { name: "time", value: "13:59" },
    ],
  },
  {
    id: 2,
    date: "2021-12-18",
    eventName: "Simple note",
    type: "other",
    additionalFields: [{ name: "note", value: "Buy bread" }],
  },
];

const ADD_EVENT = "event/ADD_EVENT";
const UPDATE_EVENT = "event/UPDATE_EVENT";
const DELETE_EVENT = "home/DELETE_EVENT";

const add = (payload) => ({
  type: ADD_EVENT,
  payload: payload,
});
const update = (payload) => ({
  type: UPDATE_EVENT,
  payload: payload,
});
const remove = (payload) => ({
  type: DELETE_EVENT,
  payload: payload,
});

const initialState = {
  events: todaysEvents,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        events: [
          ...state.events,
          { ...action.payload, id: state.events.length },
        ],
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map((e) =>
          e.id === action.payload.id ? { ...e, ...action.payload } : e
        ),
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((e) => e.id !== action.payload),
      };

    default:
      return state;
  }
}

export const addEvent = (newEvent) => {
  return (dispatch, getState) => {
    const { selectedDate } = getState().calendar;

    dispatch(add({ ...newEvent, date: selectedDate }));
  };
};

export const updateEvent = (event) => {
  return (dispatch) => {
    dispatch(update(event));
  };
};

export const deleteEvent = (id) => {
  return (dispatch) => {
    dispatch(remove(id));
  };
};
