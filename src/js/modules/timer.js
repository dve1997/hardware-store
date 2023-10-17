const timer = () => {
  let dataDedlDate = {};

  function createDate() {
    const dedlDate = new Date(2023, 9, 31);
    const dedlDateMS = dedlDate - new Date();

    dataDedlDate.days = Math.floor(dedlDateMS / (1000 * 60 * 60 * 24));
    dataDedlDate.hours = Math.floor((dedlDateMS / (1000 * 60 * 60)) % 24);
    dataDedlDate.minutes = Math.floor((dedlDateMS / (1000 * 60)) % 60);
    dataDedlDate.seconds = Math.floor((dedlDateMS / 1000) % 60);
  }

  function showTimer(data) {
    const elDays = document.querySelector("#days"),
      elHours = document.querySelector("#hours"),
      elMinutes = document.querySelector("#minutes"),
      elSeconds = document.querySelector("#seconds");

    elDays.textContent = `${data.days}`;
    elHours.textContent = `${data.hours}`;
    elMinutes.textContent = `${data.minutes}`;
    elSeconds.textContent = `${data.seconds}`;
  }

  const stop = setInterval(() => {
    createDate();
    if (dataDedlDate.seconds >= 0) {
      createDate();
      showTimer(dataDedlDate);
    } else {
      clearInterval(stop);
    }
  }, 1000);
};

export default timer;
