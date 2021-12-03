export const EVENT_TYPES = {
  holidays: {
    label: "Праздничные дни",
    additionalFields: [
      {
        name: "budget",
        label: "Бюджет:",
        component: "TEXT INPUT",
      },
    ],
  },
  activities: {
    label: "Мероприятия",
    additionalFields: [
      {
        name: "address",
        label: "адрес:",
        component: "TEXT INPUT",
      },
      {
        name: "time",
        label: "Время:",
        component: "TIME INPUT",
      },
    ],
  },
  other: {
    label: "Пометки / Другое",
    additionalFields: [
      {
        name: "",
        label: "",
        component: "TEXT INPUT",
      },
    ],
  },
};
