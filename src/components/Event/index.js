import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Input, Select } from "semantic-ui-react";
import { EVENT_TYPES } from "../../constants";

import styles from "./index.module.scss";

const options = EVENT_TYPES.map((item) => ({
  key: item.key,
  value: item.value,
  text: item.text,
}));

const Event = () => {
  const { state } = useLocation();

  const eventType = state.type
    ? EVENT_TYPES.find((e) => e.key === state.type)
    : EVENT_TYPES[0];

  const [selectedType, setSelectedType] = useState(eventType);

  const handleEventTypeChange = (value) => {
    setSelectedType(EVENT_TYPES.find((e) => e.value === value));
  };

  return (
    <div id={styles.event}>
      <div className={styles.page_title}>
        {state.type ? "Добавить событие" : "Редактировать событие"}
      </div>
      <div className={styles.row}>
        <div className={styles.label}>Название события</div>
        <Input focus name="title" />
      </div>
      <div className={styles.row}>
        <div className={styles.label}>Тип события</div>
        <Select
          options={options}
          value={selectedType.value}
          onChange={(e, data) => handleEventTypeChange(data.value)}
        />
      </div>
      {selectedType.additionalFields.map((item) => {
        return (
          <div key={item.name} className={styles.row}>
            <div className={styles.label}>{item.label}</div>
            <Input name={item.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Event;
