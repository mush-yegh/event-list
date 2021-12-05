import ru from "date-fns/locale/ru";
import { format, parseISO } from "date-fns";

export const formatDate = (date) => {
  return format(parseISO(date), "d MMMM yyyy", { locale: ru });
};
