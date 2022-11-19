// Counter Function for Cloud Resume Challenge (CRC)

fetch("http://lavell.com/counter.json")
  // Fuction beginning
  .then((res) => res.json())
  // Fetching response
  .then((data) => console.log(data));
// Returning response
