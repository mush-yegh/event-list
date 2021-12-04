import { useState } from "react";
import { useLocation, Link, Redirect } from "react-router-dom";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Input, Select, Button } from "semantic-ui-react";
import {
  EVENT_MODE,
  PAGE_TITLE,
  EVENT_TYPES,
  ADDITIONAL_INPUTS,
  INPUT_DEFAULT_VALIDATION,
  BUTTON_TITLES,
} from "../../constants";
import styles from "./index.module.scss";

const getInitialState = (state) => {
  return state && state.mode === EVENT_MODE.EDIT
    ? {
        eventName: state.item.eventName,
        eventType: EVENT_TYPES.find((e) => e.key === state.item.type),
        additionalFields: state.item.additionalFields,
      }
    : {
        eventName: "",
        eventType: EVENT_TYPES[0],
        additionalFields: ADDITIONAL_INPUTS[EVENT_TYPES[0].key],
      };
};

const Event = () => {
  const { state } = useLocation();
  const initialState = getInitialState(state);
  const [eventState, setEventState] = useState(initialState);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all", reValidateMode: "onChange" });

  // Will be redirected if typed '/event' in browser bar
  if (!state) {
    return <Redirect to="/" />;
  }

  const handleInputChange = (inputName, { value }) => {
    setValue(inputName, value, { shouldValidate: true });
  };

  const handleEventTypeChange = (value) => {
    // Clear all additional input values before setting new eventType
    eventState.additionalFields.forEach((e) => {
      setValue(e.name, null);
    });

    const type = EVENT_TYPES.find((e) => e.value === value);
    setEventState({
      ...eventState,
      eventType: type,
      additionalFields: ADDITIONAL_INPUTS[type.key],
    });
  };

  const onSubmit = (data) => {
    //TODO dispatch saveEvent
  };

  return (
    <div id={styles.event}>
      <div className={styles.page_title}>{PAGE_TITLE[state.mode]}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.row}>
          <div className={styles.label}>Название события</div>
          <Input
            name="eventName"
            className={styles.input_item}
            error={!!errors.eventName}
            defaultValue={eventState.eventName}
            {...register("eventName", {
              ...INPUT_DEFAULT_VALIDATION,
              value: (state.item && state.item.eventName) || "",
            })}
            onChange={(e, data) => handleInputChange("eventName", data)}
          />
          <ErrorMessage errors={errors} name="eventName" as="p" />
        </div>
        <div className={styles.row}>
          <div className={styles.label}>Тип события</div>
          <Select
            className={styles.input_item}
            options={EVENT_TYPES}
            value={eventState.eventType.value}
            onChange={(e, data) => handleEventTypeChange(data.value)}
          />
        </div>
        {eventState.additionalFields.map((item) => {
          const { name, value } = item;
          const additionalInput = ADDITIONAL_INPUTS[eventState.eventType.key];
          const { inputLabel, inputType, validationRules } =
            additionalInput.find((o) => o.name === item.name);
          const initialValue =
            state.item &&
            state.item.additionalFields.find((o) => o.name === name);
          return (
            <div key={name} className={styles.row}>
              <div className={styles.label}>{inputLabel}</div>
              <Input
                name={name}
                type={inputType}
                className={styles.input_item}
                defaultValue={value}
                error={!!errors[name]}
                {...register(name, {
                  ...validationRules,
                  value: (initialValue && initialValue.value) || "",
                })}
                onChange={(e, data) => handleInputChange(name, data)}
              />
              <ErrorMessage errors={errors} name={name} as="p" />
            </div>
          );
        })}
        <div className={styles.buttons}>
          <Link to={{ pathname: "/home", state: null }}>
            <Button basic>{BUTTON_TITLES.CANCEL}</Button>
          </Link>
          <Button basic type="submit">
            {BUTTON_TITLES.SAVE}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Event;
