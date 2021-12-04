import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { setSelectedItemId } from "../../redux/reducers/calendar";
import { deleteEvent } from "../../redux/reducers/events";
import CalendarBlock from "./CalendarBlock";
import EventsBlock from "./EventsBlock";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.scss";
import { useEffect } from "react";
import { useHistory } from "react-router";

const Home = () => {
  const { location } = useHistory();
  const dispatch = useDispatch();

  useEffect(() => (location.state = null), [location]);

  const { selectedDate } = useSelector((state) => state.calendar, shallowEqual);
  const onDateChange = (date) => {
    dispatch(setSelectedItemId(date));
  };

  const { events } = useSelector((state) => state.events, shallowEqual);

  const handleDeleteButtonClick = (id) => {
    dispatch(deleteEvent(id));
  };

  const highlightDatesSet = new Set(events.map((e) => e.date));

  return (
    <div id={styles.home}>
      <CalendarBlock
        selectedDate={selectedDate}
        onDateChange={onDateChange}
        highlightDates={[...highlightDatesSet].map((e) => new Date(e))}
      />
      <EventsBlock
        eventList={events.filter((e) => e.date === selectedDate)}
        onDeleteButtonClick={handleDeleteButtonClick}
      />
    </div>
  );
};

export default Home;
