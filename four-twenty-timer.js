const DateTime = luxon.DateTime;
const timeZones = Intl.supportedValuesOf('timeZone');
const timerEl = document.getElementById('timer');

const getClosestFourTwenty = () => {
  const nowInUTC = DateTime.now().toUTC();

  const morningFourTwentiesOfTheWorldInUTC = timeZones.map((timeZone) => DateTime.fromISO(`${nowInUTC.setZone(timeZone).toFormat('yyyy-MM-dd')}T04:20:00.000`, { zone: timeZone }).toUTC());
  const afternoonFourTwentiesOfTheWorldInUTC = timeZones.map((timeZone) => DateTime.fromISO(`${nowInUTC.setZone(timeZone).toFormat('yyyy-MM-dd')}T16:20:00.000`, { zone: timeZone }).toUTC());

  const allFourTwentiesOfTheWorldInUTC = morningFourTwentiesOfTheWorldInUTC.concat(afternoonFourTwentiesOfTheWorldInUTC);
  const diffBetweenNowAndAllDateTimesInTheWorld = [...new Set(allFourTwentiesOfTheWorldInUTC.map((dt) => dt - nowInUTC))];
  const dateTimesThatAreInTheFuture = diffBetweenNowAndAllDateTimesInTheWorld.filter((diff) => diff > 0);

  const sortedDateTimes = dateTimesThatAreInTheFuture.sort((a, b) => {
    return a > b ? 1 : -1;
  });

  const nextFourTwenty = DateTime.fromMillis(nowInUTC.toJSDate().getTime() + sortedDateTimes[0], { zone: 'UTC' });

  return nextFourTwenty.diff(nowInUTC, ['hours', 'minutes', 'seconds']).toObject();
};

const updateTimer = () => {
  const closestFourTwenty = getClosestFourTwenty();

  timerEl.innerHTML = `hours: ${closestFourTwenty.hours} minutes: ${closestFourTwenty.minutes} seconds: ${Math.round(closestFourTwenty.seconds)} until 4:20`;
};

setInterval(() => { updateTimer(); }, 1000);
