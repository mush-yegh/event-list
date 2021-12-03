import ru from "date-fns/locale/ru";
import { format } from "date-fns";

export const formatDate = (date) => {
  return format(date, "d MMMM yyyy", { locale: ru });
};
