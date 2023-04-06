// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', function (e) {
    let takeOffButton = document.getElementById('takeoff');
    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    let landButton = document.getElementById('landing');

    takeOffButton.addEventListener('click', function (event) {

        let response = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (response) {

            // Flight Status
            flightStatus.innerHTML = 'Shuttle in flight.';

            // Change Background Color
            shuttleBackground.style.backgroundColor = 'purple';
            // shuttleBackground.style["background-color"] = 'blue';

            // Updating Space Shuttle Height
            let currentShuttleHeight = Number(spaceShuttleHeight.innerHTML);
            spaceShuttleHeight.innerHTML = currentShuttleHeight + 10000;

        }
    });


    landButton.addEventListener('click', function (event) {
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = 0;

    })

    abortMissionButton.addEventListener('click', function (event) {

    })
});