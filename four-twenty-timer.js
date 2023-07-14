const DateTime = luxon.DateTime;
const timeZones = Intl.supportedValuesOf('timeZone');
const fourTwentyTimerEl = document.getElementById('timer');
const sevenTenTimerEl = document.getElementById('710-timer');
const itsFourTwentyEl = document.getElementById('its-four-twenty-message');
const itsSevenTenEl = document.getElementById('its-seven-ten-message');
const fourTwentyHoursEl = document.getElementById('hours');
const initialFourTwentyHoursDisplay = fourTwentyHoursEl.style.display;
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const oneSecondInMilliseconds = 1000;
const twentyFourHoursInMilliseconds = 86400000;

let isFourTwenty = false;
let isSevenTen = false;
let showFourTwentyMessage = false;
let showSevenTenMessage = false;
let showingFourTwentyMessage = false;
let showingSevenTenMessage = false;

let uniqueFourTwentiesInTheWorld = [];
let uniqueSevenTensInTheWorld = [];

const delay = (t) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, t);
  });
}

Promise.delay = function (fn, t) {
  if (!t) {
    t = fn;
    fn = function () { };
  }
  return delay(t).then(fn);
}

Promise.prototype.delay = function (fn, t) {
  return this.then(function () {
    return Promise.delay(fn, t);
  });

}

const getClosestFourTwenty = () => {
  const nowInUTC = DateTime.now().toUTC();

  const diffBetweenNowAndAllDateTimesInTheWorld = uniqueFourTwentiesInTheWorld.map((ft) => ft - nowInUTC);
  const dateTimesDiffsThatAreInTheFuture = diffBetweenNowAndAllDateTimesInTheWorld.filter((diff) => diff > 0);

  const sortedDateTimeDiffs = dateTimesDiffsThatAreInTheFuture.sort((a, b) => {
    return a > b ? 1 : -1;
  });

  const nextFourTwenty = DateTime.fromMillis(nowInUTC.toJSDate().getTime() + sortedDateTimeDiffs[0], { zone: 'UTC' });

  return nextFourTwenty.diff(nowInUTC, ['hours', 'minutes', 'seconds']).toObject();
};

const getClosestSevenTen = () => {
  const nowInUTC = DateTime.now().toUTC();

  const diffBetweenNowAndAllDateTimesInTheWorld = uniqueFourTwentiesInTheWorld.map((ft) => ft - nowInUTC);
  const dateTimesDiffsThatAreInTheFuture = diffBetweenNowAndAllDateTimesInTheWorld.filter((diff) => diff > 0);

  const sortedDateTimeDiffs = dateTimesDiffsThatAreInTheFuture.sort((a, b) => {
    return a > b ? 1 : -1;
  });

  const nextFourTwenty = DateTime.fromMillis(nowInUTC.toJSDate().getTime() + sortedDateTimeDiffs[0], { zone: 'UTC' });

  return nextFourTwenty.diff(nowInUTC, ['hours', 'minutes', 'seconds']).toObject();
};

const playItsFourTwentyTimer = () => {
  if (!showingFourTwentyMessage) {
    const itsFourTwentyTimerEl = document.getElementById('four-twenty-timer');

    const updateItsFourTwentyTimer = (itsFourTwentyTimerEl, timeDisplay) => {
      itsFourTwentyTimerEl.innerHTML = timeDisplay;
    };

    showingFourTwentyMessage = true;
    itsFourTwentyTimerEl.innerHTML = '00:00';

    Promise
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:01'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:02'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:03'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:04'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:05'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:06'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:07'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:08'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:09'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:10'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:11'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:12'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:13'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:14'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:15'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:16'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:17'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:18'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:19'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:20'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:21'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:22'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:23'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:24'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:25'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:26'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:27'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:28'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:29'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:30'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:31'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:32'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:33'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:34'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:35'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:36'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:37'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:38'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:39'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:40'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:41'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:42'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:43'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:44'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:45'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:46'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:47'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:48'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:49'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:50'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:51'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:52'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:53'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:54'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:55'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:56'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:57'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:58'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:59'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '01:00'), 1000)
      .delay(() => {
        isFourTwenty = false;

        itsFourTwentyEl.classList.add('hidden');
        fourTwentyTimerEl.classList.remove('hidden');
      }, 1000)
      .delay(() => {
        showingFourTwentyMessage = false;
      }, 1000);
  }
};

const playItsSevenTenTimer = () => {
  if (!showingFourTwentyMessage) {
    const itsFourTwentyTimerEl = document.getElementById('four-twenty-timer');

    const updateItsFourTwentyTimer = (itsFourTwentyTimerEl, timeDisplay) => {
      itsFourTwentyTimerEl.innerHTML = timeDisplay;
    };

    showingFourTwentyMessage = true;
    itsFourTwentyTimerEl.innerHTML = '00:00';

    Promise
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:01'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:02'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:03'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:04'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:05'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:06'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:07'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:08'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:09'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:10'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:11'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:12'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:13'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:14'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:15'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:16'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:17'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:18'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:19'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:20'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:21'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:22'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:23'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:24'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:25'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:26'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:27'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:28'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:29'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:30'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:31'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:32'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:33'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:34'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:35'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:36'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:37'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:38'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:39'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:40'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:41'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:42'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:43'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:44'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:45'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:46'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:47'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:48'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:49'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:50'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:51'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:52'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:53'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:54'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:55'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:56'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:57'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:58'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '00:59'), 1000)
      .delay(() => updateItsFourTwentyTimer(itsFourTwentyTimerEl, '01:00'), 1000)
      .delay(() => {
        isFourTwenty = false;

        itsFourTwentyEl.classList.add('hidden');
        fourTwentyTimerEl.classList.remove('hidden');
      }, 1000)
      .delay(() => {
        showingFourTwentyMessage = false;
      }, 1000);
  }
};

const handleFourTwentyTimer = () => {
  if (showFourTwentyMessage) {
    isFourTwenty = true;

    fourTwentyTimerEl.classList.add('hidden');
    itsFourTwentyEl.classList.remove('hidden');

    showFourTwentyMessage = false;
  }

  if (!isFourTwenty) {
    const closestFourTwenty = getClosestFourTwenty();

    let hours = closestFourTwenty.hours;
    let minutes = closestFourTwenty.minutes;
    const seconds = Math.round(closestFourTwenty.seconds);

    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }

    if (hours === 0 && minutes === 0 && seconds === 1) {
      showFourTwentyMessage = true;
    }

    if (hours === 0) {
      if (fourTwentyHoursEl.parentElement.classList.contains('timer')) {
        fourTwentyHoursEl.style.display = 'none';
      } else {
        fourTwentyHoursEl.parentElement.style.display = 'none';
      }
    } else {
      hours.style.display = initialFourTwentyHoursDisplay;
      hours.innerHTML = hours;
    }

    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
  } else {
    playItsFourTwentyTimer();
  }
};

const handleSevenTenTimer = () => {
  if (showSevenTenMessage) {
    isSevenTen = true;

    sevenTenTimerEl.classList.add('hidden');
    sevenTenTimerEl.classList.remove('hidden');

    showSevenTenMessage = false;
  }

  if (!isSevenTen) {
    const closestSevenTen = getClosestSevenTen();

    let hours = closestSevenTen.hours;
    let minutes = closestSevenTen.minutes;
    const seconds = Math.round(closestSevenTen.seconds);

    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }

    if (hours === 0 && minutes === 0 && seconds === 1) {
      showSevenTenMessage = true;
    }

    if (hours === 0) {
      if (fourTwentyHoursEl.parentElement.classList.contains('710-timer')) {
        fourTwentyHoursEl.style.display = 'none';
      } else {
        fourTwentyHoursEl.parentElement.style.display = 'none';
      }
    } else {
      hours.style.display = initialFourTwentyHoursDisplay;
      hours.innerHTML = hours;
    }

    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
  } else {
    playItsSevenTenTimer();
  }
};

const updateTimer = () => {
  handleFourTwentyTimer();
  // handleSevenTenTimer();
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

  uniqueFourTwentiesInTheWorld = [...new Map(fourTwenties.map(dt => [dt['ts'], dt])).values()];
};

const updateAllSevenTensOfTheWorldInUTC = () => {
  const nowInUTC = DateTime.now().toUTC();
  const sevenTens = [];

  timeZones.forEach((timeZone) => {
    const todaysTimeZoneDate = nowInUTC.setZone(timeZone).toFormat('yyyy-MM-dd');
    const tomorrowsTimeZoneDate = nowInUTC.plus({ days: 1 }).setZone(timeZone).toFormat('yyyy-MM-dd');

    const todaysMorningSevenTens = DateTime.fromISO(`${todaysTimeZoneDate}T07:10:00.000`, { zone: timeZone }).toUTC();
    const todaysAfternoonSevenTens = DateTime.fromISO(`${todaysTimeZoneDate}T19:20:00.000`, { zone: timeZone }).toUTC();

    const tomorrowsMorningSevenTens = DateTime.fromISO(`${tomorrowsTimeZoneDate}T07:20:00.000`, { zone: timeZone }).toUTC();
    const tomorrowsAfternoonSevenTens = DateTime.fromISO(`${tomorrowsTimeZoneDate}T19:20:00.000`, { zone: timeZone }).toUTC();

    sevenTens.push(todaysMorningSevenTens);
    sevenTens.push(todaysAfternoonSevenTens);
    sevenTens.push(tomorrowsMorningSevenTens);
    sevenTens.push(tomorrowsAfternoonSevenTens);
  });

  uniqueSevenTensInTheWorld = [...new Map(sevenTens.map(dt => [dt['ts'], dt])).values()];
};

const init = () => {
  updateAllFourTwentiesOfTheWorldInUTC();
  // updateAllSevenTensOfTheWorldInUTC();

  updateTimer();

  fourTwentyTimerEl.classList.remove('hidden');

  setInterval(() => { updateTimer(); }, oneSecondInMilliseconds);
  setInterval(() => { updateAllFourTwentiesOfTheWorldInUTC(); }, twentyFourHoursInMilliseconds);
  // setInterval(() => { updateAllSevenTensOfTheWorldInUTC(); }, twentyFourHoursInMilliseconds);
};

init();
