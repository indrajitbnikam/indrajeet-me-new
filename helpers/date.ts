import { format } from 'date-fns';

export const getFormattedDate = (
  dateString: string,
  dateFormat: string = 'MMM-yyyy'
) => format(new Date(dateString), dateFormat);
