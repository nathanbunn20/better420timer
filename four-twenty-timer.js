const DateTime = luxon.DateTime;
const timeZones = Intl.supportedValuesOf('timeZone');
const timerEl = document.getElementById('timer');
const initialLoadNowUTC = DateTime.now().toUTC();

// to make this really optimized, I should cache the next 2 days (today & tomorrow in UTC) worth of fourTwenties
// have an interval that runs daily that loads the next day of fourtwenties sor we always have today & tomorrow cached
// then everything should run with very low overhead and a small jump in cpu once a day and it will be super unnoticeable

const morningFourTwentiesOfTheWorldInUTC = timeZones.map((timeZone) => DateTime.fromISO(`${initialLoadNowUTC.setZone(timeZone).toFormat('yyyy-MM-dd')}T04:20:00.000`, { zone: timeZone }).toUTC());
const afternoonFourTwentiesOfTheWorldInUTC = timeZones.map((timeZone) => DateTime.fromISO(`${initialLoadNowUTC.setZone(timeZone).toFormat('yyyy-MM-dd')}T16:20:00.000`, { zone: timeZone }).toUTC());
let allFourTwentiesOfTheWorldInUTC = morningFourTwentiesOfTheWorldInUTC.concat(afternoonFourTwentiesOfTheWorldInUTC);

const getClosestFourTwenty = () => {
  const nowInUTC = DateTime.now().toUTC();

  const uniqueFourTwentiesInTheWorld = [...new Map(allFourTwentiesOfTheWorldInUTC.map(dt => [dt['ts'], dt])).values()];
  const diffBetweenNowAndAllDateTimesInTheWorld = uniqueFourTwentiesInTheWorld.map((dt) => dt - nowInUTC);
  const dateTimesThatAreInTheFuture = diffBetweenNowAndAllDateTimesInTheWorld.filter((diff) => diff > 0);

  const sortedDateTimes = dateTimesThatAreInTheFuture.sort((a, b) => {
    return a > b ? 1 : -1;
  });

  const nextFourTwenty = DateTime.fromMillis(nowInUTC.toJSDate().getTime() + sortedDateTimes[0], { zone: 'UTC' });

  return nextFourTwenty.diff(nowInUTC, ['hours', 'minutes', 'seconds']).toObject();
};

const updateTimer = () => {
  const closestFourTwenty = getClosestFourTwenty();

  timerEl.innerHTML = `${closestFourTwenty.hours} hours<br />${closestFourTwenty.minutes} minutes<br />${Math.round(closestFourTwenty.seconds)} seconds<br />until 4:20`;
};

const updateAllFourTwentiesOfTheWorldInUTC = () => {
  const nowInUTC = DateTime.now().toUTC(); // may not matter to have toUTC() here - (for optimization)

  const fourTwenties = [];

  timeZones.forEach((timeZone) => {
    const timeZoneDate = nowInUTC.setZone(timeZone).toFormat('yyyy-MM-dd');

    const am = DateTime.fromISO(`${timeZoneDate}T04:20:00.000`, { zone: timeZone }).toUTC();
    const pm = DateTime.fromISO(`${timeZoneDate}T16:20:00.000`, { zone: timeZone }).toUTC();

    fourTwenties.push(am);
    fourTwenties.push(pm);
  });
  
  allFourTwentiesOfTheWorldInUTC = fourTwenties;
};

setInterval(() => { updateTimer(); }, 1000); // every second
setInterval(() => { updateAllFourTwentiesOfTheWorldInUTC(); }, 60000); // every minute, I don't think this works since we aren't using a cron schedule. gotta do it every second probably :(
