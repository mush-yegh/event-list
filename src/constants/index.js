export const INPUT_DEFAULT_VALIDATION = {
  required: "Please fill this field",
  minLength: {
    value: 4,
    message: "Length is too short",
  },
};

export const EVENT_MODE = {
  EDIT: "edit",
  ADD: "add",
};

export const PAGE_TITLE = {
  edit: "Редактировать событие",
  add: "Добавить событие",
};

export const EVENT_TYPES = [
  {
    key: "holidays",
    value: 0,
    text: "Праздничные дни",
  },
  {
    key: "activities",
    value: 1,
    text: "Мероприятия",
  },
  {
    key: "other",
    value: 2,
    text: "Пометки / Другое",
  },
];

export const ADDITIONAL_INPUTS = {
  holidays: [
    {
      name: "budget",
      label: "Бюджет",
      inputLabel: "Бюджет",
      inputType: "text",
      suffix: "$",
      validationRules: INPUT_DEFAULT_VALIDATION,
    },
  ],
  activities: [
    {
      name: "address",
      label: "Адрес",
      inputLabel: "Куда идти ?",
      inputType: "text",
      suffix: "",
      validationRules: INPUT_DEFAULT_VALIDATION,
    },
    {
      name: "time",
      label: "Время",
      inputLabel: "Во сколько ?",
      inputType: "time",
      suffix: "",
      validationRules: { required: "Время не указано" },
    },
  ],
  other: [
    {
      name: "note",
      label: "",
      inputLabel: "",
      inputType: "text",
      suffix: "",
      validationRules: INPUT_DEFAULT_VALIDATION,
    },
  ],
};

export const BUTTON_TITLES = {
  ADD: "Добавить",
  CANCEL: "Отмена",
  SAVE: "Сохронить",
};
