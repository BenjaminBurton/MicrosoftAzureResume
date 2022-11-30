// Counter Function for Cloud Resume Challenge (CRC)

window.addEventListener("DOMContentLoaded", (e) => {
  getVisitorCount();
});

const apiUrl = "";

const getVisitorCount = () => {
  let count = 10;
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      console.log("called website");
      count = response.count;
      document.getElementById("count").innerText = count;
    })
    .catch(function (err) {
      console.log(err);
    });
  return count;
};
