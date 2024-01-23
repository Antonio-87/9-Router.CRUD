const formatDate = (timestamp: number) => {
  const differenceTime = (Date.now() - timestamp) / 1000;
  const formatTime =
    differenceTime >= 86400
      ? `${Math.floor(differenceTime / 86400)} дней назад`
      : differenceTime >= 3600
        ? `${Math.floor(differenceTime / 3600)} часов назад`
        : differenceTime >= 60
          ? `${Math.floor(differenceTime / 60)} минут назад`
          : "меньше минуты назад";
  return formatTime;
};

export default formatDate;
