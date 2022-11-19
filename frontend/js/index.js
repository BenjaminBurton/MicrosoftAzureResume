// Counter Function for Cloud Resume Challenge (CRC)
window.addEventListener('DOMContentLoaded', (e) => {
    getVisitorCount();
})

const functionApi = '';

const getVisitorCount = () => {
    let counter = 10;
    fetch(functionApi).then((res) => {
        return res.json()
    }).then((res) => {
        console.log("called website");
        counter = res.counter;
        document.getElementById("counter").innerText = counter;
    }).catch(function (err) {
        console.log(err);
    });
    return counter;
}