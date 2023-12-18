async function getLoc()
{
    const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    const data = await response.json();

    const {latitude, longitude, velocity} = data;
    // console.log(data.latitude);
    // console.log(data.longitude);
    console.log(data.velocity);

    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
    document.getElementById('vel').textContent = velocity;
}

getLoc();