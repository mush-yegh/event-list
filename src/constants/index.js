export const EVENT_TYPES = [
  {
    key: "holidays",
    value: 0,
    text: "Праздничные дни",
    additionalFields: [
      {
        name: "budget",
        label: "Бюджет:",
        component: "TEXT INPUT",
      },
    ],
  },
  {
    key: "activities",
    value: 1,
    text: "Мероприятия",
    additionalFields: [
      {
        name: "address",
        label: "Куда идти ?",
        component: "TEXT INPUT",
      },
      {
        name: "time",
        label: "Во сколько ?",
        component: "TIME INPUT",
      },
    ],
  },
  {
    key: "other",
    value: 2,
    text: "Пометки / Другое",
    additionalFields: [
      {
        name: "note",
        label: "",
        component: "TEXT INPUT",
      },
    ],
  },
];
