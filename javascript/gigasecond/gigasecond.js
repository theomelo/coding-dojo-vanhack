//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  //solution : 1
  //const baseDate = 1000000000;
  // const time = new Date(date);
  // time.setUTCSeconds(time.getUTCSeconds() + baseDate);

  //solution : 2
  const gigTime = 1 * 1000 * (10 ** 9);
  let time = date.getTime() + gigTime;
  return new Date(time);
};
