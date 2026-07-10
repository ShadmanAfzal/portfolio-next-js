import moment from 'moment';

export const getYearsOfExperience = (startDateString = '2022-07-21') => {
  const startDate = moment(startDateString, 'YYYY-MM-DD');
  const years = moment().diff(startDate, 'days') / 365.25;

  return years - Math.floor(years) >= 0.9
    ? Math.ceil(years)
    : Math.floor(years);
};

export const formatYearsOfExperience = (startDateString = '2022-07-21') => {
  return `${getYearsOfExperience(startDateString)}+`;
};
