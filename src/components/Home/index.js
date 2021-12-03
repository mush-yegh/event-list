import CalendarBlock from "./CalendarBlock";
import EventsBlock from "./EventsBlock";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.scss";

const todaysEvents = [
  {
    id: 1,
    type: "holidays",
    title: "Dog's birthday",
    additionalFields: [
      {
        key: "budget",
        value: "300$",
      },
    ],
  },
  {
    id: 2,
    type: "activities",
    title: "Drinking vodka with neighbor",
    additionalFields: [
      { key: "address", value: "in Tomsk city" },
      { key: "time", value: "13:59" },
    ],
  },
  {
    id: 3,
    type: "other",
    title: "Simple note",
    additionalFields: [{ key: "", value: "Buy bread" }],
  },
];

const Home = () => {
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
