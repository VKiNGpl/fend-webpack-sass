function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let baseURL = 'api.openweathermap.org/data/2.5/weather?q='
    let locationName = 'London,uk'
    let apiKey = '4188e0776bf39eeccc86ef1d6cc901f5'
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch(`http://${baseURL}${locationName}&APPID=${apiKey}`)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.weather[0].description

        Object.keys(res).forEach(e => console.log(`key=${e}  value=${res[e]}`));
    })
}

export { handleSubmit }
