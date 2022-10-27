import './CurrentWeather.css';


export default function CurrentWeather({ data }) {
    return (
        <div className='card-container'>
            <div className='card'>
                <div className='top'>
                    <h2 className='cityName'>{data.city}</h2>
                    <p className='info-paragraph'>{data.weather[0].description}</p>
                    <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} width='100px' alt="img" />
                </div>
                <div className='bottom'>
                    <p className='info-paragraph'>{data.main.temp}°C</p>
                    <div className='details'>
                        <div className='parameter-row'>
                            <h3 className='parameter-label'>Details</h3>
                        </div>
                        <div className='parameter-row'>
                            <span className='parameter-label'>Feels like </span>
                            <span className='parameter-label'>23°C</span>
                        </div>
                        <div className='parameter-row'>
                            <span className='parameter-label'>Wind </span>
                            <span className='parameter-label'>{data.wind.speed} m/s</span>
                        </div>
                        <div className='parameter-row'>
                            <span className='parameter-label'>Humidity </span>
                            <span className='parameter-label'>{data.main.humidity}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
