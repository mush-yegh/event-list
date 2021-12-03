import { useState } from "react";
import { Link } from "react-router-dom";
import ru from "date-fns/locale/ru";
import DatePicker from "react-datepicker";
import { Button, Icon } from "semantic-ui-react";
import { formatDate } from "./../../helpers";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./index.module.scss";

const CalendarBlock = () => {
  const [chosenDate, setChosenDate] = useState(new Date());

  return (
    <div id={styles.calendar_block}>
      <Button basic icon labelPosition="right" className={styles.chosen_date}>
        {formatDate(chosenDate)}
        <Icon name="caret down" />
      </Button>
      <DatePicker
        selected={chosenDate}
        onChange={(date) => setChosenDate(date)}
        inline
        locale={ru}
      />
      <Link
        to={{
          pathname: "/event",
          state: { chosenDate },
        }}
      >
        <Button fluid basic content="Добавить"></Button>
      </Link>
    </div>
  );
};

export default CalendarBlock;