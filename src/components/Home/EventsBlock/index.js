import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import styles from "./index.module.scss";

const EventsBlock = ({ eventList, onDeleteButtonClick }) => {
  if (!eventList.length) {
    return (
      <div id={styles.events_block}>
        <p className={styles.empty}>NO EVENTS</p>
      </div>
    );
  }

  return (
    <div id={styles.events_block}>
      {eventList.map((item) => {
        const { id, type, title, additionalFields } = item;
        return (
          <div key={id} className={styles.event_row}>
            <div className={styles.title_icons}>
              <div className={styles.event_title}>{title}</div>
              <div className={styles.icons}>
                <Link
                  to={{
                    pathname: "/event",
                    state: { type },
                  }}
                >
                  <Button icon>
                    <Icon name="pencil" />
                  </Button>
                </Link>
                <Button icon onClick={() => onDeleteButtonClick(id)}>
                  <Icon name="trash alternate outline" />
                </Button>
              </div>
            </div>

            {additionalFields.map((field) => {
              const { key: label, value } = field;
              return (
                <div key={`${id}_${field.key}`} className={styles.sub_row}>
                  {label && (
                    <div className={styles.field_title}>{`${label}:`}</div>
                  )}
                  <div className={styles.field_value}>{value}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default EventsBlock;
