const DateTime = luxon.DateTime;
const timeZones = Intl.supportedValuesOf('timeZone');
const hoursEl = document.getElementById('hours');
const initialHoursDisplay = hoursEl.style.display;
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const oneSecondInMilliseconds = 1000;
const twentyFourHoursInMilliseconds = 86400000;

let uniqueFourTwentiesInTheWorld = [];

const getClosestFourTwenty = () => {
  const nowInUTC = DateTime.now().toUTC();

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

  let hours = closestFourTwenty.hours;
  let minutes = closestFourTwenty.minutes;
  let seconds = Math.round(closestFourTwenty.seconds);

  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  if (hours === 0) {
    if (hoursEl.parentElement.classList.contains('timer')) {
      hoursEl.style.display = 'none';
    } else {
      hoursEl.parentElement.style.display = 'none';
    }
  } else {
    hours.style.display = initialHoursDisplay;
    hours.innerHTML = hours;
  }

  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
};

const updateAllFourTwentiesOfTheWorldInUTC = () => {
  const nowInUTC = DateTime.now().toUTC();
  const fourTwenties = [];

  timeZones.forEach((timeZone) => {
    const todaysTimeZoneDate = nowInUTC.setZone(timeZone).toFormat('yyyy-MM-dd');
    const tomorrowsTimeZoneDate = nowInUTC.plus({ days: 1 }).setZone(timeZone).toFormat('yyyy-MM-dd');

    const todaysMorningFourTwenties = DateTime.fromISO(`${todaysTimeZoneDate}T04:20:00.000`, { zone: timeZone }).toUTC();
    const todaysAfternoonFourTwenties = DateTime.fromISO(`${todaysTimeZoneDate}T16:20:00.000`, { zone: timeZone }).toUTC();

    const tomorrowsMorningFourTwenties = DateTime.fromISO(`${tomorrowsTimeZoneDate}T04:20:00.000`, { zone: timeZone }).toUTC();
    const tomorrowsAfternoonFourTwenties = DateTime.fromISO(`${tomorrowsTimeZoneDate}T16:20:00.000`, { zone: timeZone }).toUTC();

    fourTwenties.push(todaysMorningFourTwenties);
    fourTwenties.push(todaysAfternoonFourTwenties);
    fourTwenties.push(tomorrowsMorningFourTwenties);
    fourTwenties.push(tomorrowsAfternoonFourTwenties);
  });
  
  uniqueFourTwentiesInTheWorld = [...new Map(fourTwenties.map(dt => [dt['ts'], dt])).values()];;
};

const init = () => {
  updateAllFourTwentiesOfTheWorldInUTC();

  updateTimer();

  setInterval(() => { updateTimer(); }, oneSecondInMilliseconds);
  setInterval(() => { updateAllFourTwentiesOfTheWorldInUTC(); }, twentyFourHoursInMilliseconds);
};

init();
