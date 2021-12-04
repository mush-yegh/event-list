import { Link } from "react-router-dom";
import ru from "date-fns/locale/ru";
import DatePicker from "react-datepicker";
import { Button, Icon } from "semantic-ui-react";
import { BUTTON_TITLES, EVENT_MODE } from "./../../../constants";
import { formatDate } from "./../../helpers";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.scss";

const CalendarBlock = ({ selectedDate, onDateChange, highlightDates }) => {
  return (
    <div id={styles.calendar_block}>
      <Button basic icon labelPosition="right" className={styles.chosen_date}>
        {formatDate(selectedDate)}
        <Icon name="caret down" />
      </Button>
      <DatePicker
        selected={new Date(selectedDate)}
        onChange={(date) => onDateChange(date)}
        inline
        locale={ru}
        highlightDates={highlightDates}
      />
      <Link
        to={{
          pathname: "/event",
          state: { mode: EVENT_MODE.ADD, selectedDate },
        }}
      >
        <Button fluid basic content={BUTTON_TITLES.ADD}></Button>
      </Link>
    </div>
  );
};

export default CalendarBlock;
