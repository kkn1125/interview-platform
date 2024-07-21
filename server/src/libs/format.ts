export const format = (value: string | number | Date, form: string) => {
  return form.replace(/YYYY|MM|dd|HH|mm|ss|SSS|AP/g, ($1) => {
    const base = new Date(value);
    const year = base.getFullYear().toString().padStart(4, '0');
    const month = (base.getMonth() + 1).toString().padStart(2, '0');
    const date = base.getDate().toString().padStart(2, '0');
    const hour = base.getHours();
    const min = base.getMinutes().toString().padStart(2, '0');
    const sec = base.getSeconds().toString().padStart(2, '0');
    const millisec = base.getMilliseconds().toString().padStart(3, '0');

    const is12 = form.includes('AP');
    const isOver12 = hour > 12;

    const hourString = (is12 ? hour - 12 : isOver12 ? hour : hour - 12)
      .toString()
      .padStart(2, '0');

    switch ($1) {
      case 'YYYY':
        return year;
      case 'MM':
        return month;
      case 'dd':
        return date;
      case 'HH':
        return hourString;
      case 'mm':
        return min;
      case 'ss':
        return sec;
      case 'SSS':
        return millisec;
      default:
        return $1;
    }
  });
};
