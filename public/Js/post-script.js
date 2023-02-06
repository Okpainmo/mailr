const formDOM = document.querySelector('.form');
const emailDOM = document.getElementById('emailDOM');

formDOM.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userEmail = emailDOM.value;

  try {
    // using axios for post request
    // pass name as form input value in the axios post method

    console.log({ userEmail });
    await axios.post('/submit-email', { userEmail });
  } catch (error) {
    console.log(error);
  }
});

formDOM.addEventListener('click', async (e) => {
  e.preventDefault();
  const successCallback = (position) => {
    console.log(position);
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
});
