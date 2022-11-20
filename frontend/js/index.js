// Counter Function for Cloud Resume Challenge (CRC)

window.addEventListener("DOMContentLoaded", (e) => {
  getVisitorCount();
});

const functionApi = "";

const getVisitorCount = () => {
  let counting = 10;
  fetch(functionApi)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      console.log("called website");
      counting = response.counting;
      document.getElementById("counting").innerText = counting;
    })
    .catch(function (err) {
      console.log(err);
    });
  return counting;
};
