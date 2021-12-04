import CalendarBlock from "./CalendarBlock";
import EventsBlock from "./EventsBlock";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.scss";
import { useEffect } from "react";
import { useHistory } from "react-router";

const todaysEvents = [
  {
    id: 1,
    eventName: "Dog's birthday",
    type: "holidays",
    additionalFields: [{ name: "budget", value: "300$" }],
  },
  {
    id: 2,
    eventName: "Drinking vodka with neighbor",
    type: "activities",
    additionalFields: [
      { name: "address", value: "in Tomsk city" },
      { name: "time", value: "13:59" },
    ],
  },
  {
    id: 3,
    eventName: "Simple note",
    type: "other",
    additionalFields: [{ name: "note", value: "Buy bread" }],
  },
];

const Home = () => {
  const { location } = useHistory();
  useEffect(() => (location.state = null), [location]);

  const handleDeleteButtonClick = (id) => {
    //TODO dispatch deleteEvent action
  };

  return (
    <div id={styles.home}>
      <CalendarBlock />
      <EventsBlock
        onDeleteButtonClick={handleDeleteButtonClick}
        eventList={todaysEvents}
      />
    </div>
  );
};

export default Home;
