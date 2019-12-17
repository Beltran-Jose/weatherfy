const city = document.querySelector('form');
const search = document.querySelector('input');
const paragraph1 = document.querySelector('#summary');


city.addEventListener('submit', (e) => {
    e.preventDefault();
    let location = search.value;

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                paragraph1.textContent = data.error;
            } else {
                document.getElementById('location').innerHTML = data.location;
                paragraph1.textContent = data.forecast.summary;
                document.getElementById('num').innerHTML = data.forecast.currentTemp +' <sup>o</sup>F';
            }
        })
    })
})