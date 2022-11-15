window.addEventListener('DOMContentLoaded', (e) => {
    getVisitorCount();
})

const functionApi = "";

const getVisitorCount = () => {
    let cpunt = 10;
    fetch(functionApi).then(res => {
        return res.json()
    }).then(res => {
        console.log("called api");
        count = res.count;
        document.getElementById("counter").innerText = count;
    }).catch(function (err) {
        console.log(err)
    });
    return count;
}