import axios from "axios";
import countapi from "countapi-js";

countapi.visits().then((result) => {
  console.log(result.value);
});
// Counter Function for Cloud Resume Challenge (CRC)

window.addEventListener("DOMContentLoaded", (e) => {
  getVisitorCount();
});

const apinode = "https://apinode.documents.azure.com:443/";

const getVisitorCount = () => {
  let count = 0;
  fetch("https://apinode.documents.azure.com:443/")
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

// module.exports = async function (context, req) {
//   context.res.json({
//     text: "Hello from the API",
//   });
// };
