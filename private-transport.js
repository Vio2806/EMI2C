document.getElementById('co2Form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Show loading message
    document.getElementById('loadingMessage').style.display = 'block';

    const vehicleType = parseInt(document.getElementById('vehicleType').value);
    const fuelType = parseInt(document.getElementById('fuelType').value);
    const engineCapacity = parseInt(document.getElementById('engineCapacity').value);
    const tripDistance = parseInt(document.getElementById('tripDistance').value);
    const saveTrip = document.getElementById('saveTrip').checked;

    // Simulate a calculation delay
    setTimeout(function() {
        let select = vehicleType+fuelType+engineCapacity;
        
        const res = calcu(select,tripDistance);
        // Hide loading message
        document.getElementById('loadingMessage').style.display = 'none';

        // Show result message
        let resultMessage = document.getElementById('resultMessage');
        resultMessage.innerHTML = `
        Based on the information that you gave us, we have calculated the result of it. 
        Your trip emitted <span style="color: red;">${res.toFixed(2)} Kilo grams</span> of Carbon.
        You have exceeded daily use of Carbon. We suggest you to use public transport :)
        `;
        resultMessage.style.display = 'block';
        if(saveTrip==true){
            if (saveTrip) {
                updateCSV(getCurrentMonth(),res);
                console.log("save");
                console.log(localStorage.getItem("month0"));
                console.log(localStorage.getItem("car0"));
            }
        }
    }, 2000); // Simulate delay
});

// Add event listener to the switch link
document.querySelector('.switch-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = "public-transport.html"; // Redirect to public transport page
});
function calcu(type, range) {
    const list = [0.17297, 0.21486, 0.29937, 0.14518, 0.18097, 0.18097, 0.24546, 0.11914, 0.21726, 0.08499, 0.10316, 0.13724];
    return range * list[type];
}
function getCurrentMonth() {
    return new Date().getMonth() + 1;
}

function updateCSV(currentMonth, carbon) {
    let month0 = parseInt(localStorage.getItem("month0"));
    let car0 = parseInt(localStorage.getItem("car0"));
    let month1 = parseInt(localStorage.getItem("month1"));
    let car1 = parseInt(localStorage.getItem("car1"));
    let month2 = parseInt(localStorage.getItem("month2"));
    let car2 = parseInt(localStorage.getItem("car2"));
    let month3 = parseInt(localStorage.getItem("month3"));
    let car3 = parseInt(localStorage.getItem("car3"));
    let month4 = parseInt(localStorage.getItem("month4"));
    let car4 = parseInt(localStorage.getItem("car4"));
    let month5 = parseInt(localStorage.getItem("month5"));
    let car5 = parseInt(localStorage.getItem("car5"));
    if(localStorage.getItem("month0")==null){
        localStorage.setItem("month0",currentMonth);
        localStorage.setItem("car0",carbon);
    }else{
        if(currentMonth==month0){
            car0 = car0+carbon;
            localStorage.setItem("car0",car0);
        }else{
            localStorage.setItem("month5",month4);
            localStorage.setItem("car5",car4)
            localStorage.setItem("month4",month3);
            localStorage.setItem("car4",car3)
            localStorage.setItem("month3",month2);
            localStorage.setItem("car3",car2)
            localStorage.setItem("month2",month1);
            localStorage.setItem("car2",car1);
            localStorage.setItem("month1",month0);
            localStorage.setItem("car1",car0);
            localStorage.setItem("month0",currentMonth);
            localStorage.setItem("car0",carbon);
        }
    }
}